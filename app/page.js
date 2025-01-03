"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import MovieCard from "./components/MovieCard";

import NavigationBar from "./components/NavigationBar";

export default function Watchlist() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${query}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <main className="max-w-xl mx-auto">
      {/* HEADER */}
      <section>
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold mb-5">WATCHLIST</h1>

          <NavigationBar />
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="space-x-5 flex justify-center mb-10">
          <input
            type="text"
            placeholder="Type here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn px-7" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="flex justify-center">
          {movies.length > 0 ? (
            <ul className="truncate">
              <MovieCard movies={movies} />
            </ul>
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <section></section>
    </main>
  );
}
