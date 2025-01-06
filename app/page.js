"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import NavigationBar from "./components/NavigationBar";

export default function Watchlist() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Load myList from localStorage on page load
    const savedList = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedList);

    // Load last search query and results from localStorage
    const lastQuery = localStorage.getItem("lastQuery");
    const lastMovies = JSON.parse(localStorage.getItem("lastMovies")) || [];
    if (lastQuery) {
      setQuery(lastQuery);
      setMovies(lastMovies);
    }
  }, []);

  const handleSearch = async () => {
    if (!query) return;
    const url = `https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${query}`;

    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data.Response === "True") {
        setMovies(data.Search || []);
        // Save last search query and results to localStorage
        localStorage.setItem("lastQuery", query);
        localStorage.setItem("lastMovies", JSON.stringify(data.Search || []));
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const addToMyList = (movie) => {
    setMyList((prevList) => {
      // Prevent duplicates
      const updatedList = prevList.some((item) => item.imdbID === movie.imdbID)
        ? prevList
        : [...prevList, movie];

      // Save to localStorage
      localStorage.setItem("myList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const removeFromMyList = (movie) => {
    setMyList((prevList) => {
      const updatedList = prevList.filter(
        (item) => item.imdbID !== movie.imdbID
      );
      localStorage.setItem("myList", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <main className="max-w-xl mx-auto">
      {/* HEADER */}
      <section>
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold mb-5">WATCHLIST</h1>

          <NavigationBar myListCount={myList.length} />
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
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn px-7" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div className="flex justify-center">
          {movies.length > 0 ? (
            <ul className="truncate">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onRemove={removeFromMyList}
                  isMyListPage={false}
                  myList={myList}
                  onAdd={addToMyList}
                />
              ))}
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
