"use client";

import NavigationBar from "../components/NavigationBar";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function MyList() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Load the saved list from localStorage
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      setMyList(JSON.parse(savedList));
    }
  }, []);

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
        <div className="my-list-container">
          <h1 className="text-2xl font-bold mb-4">My List</h1>
          {myList.length === 0 ? (
            <p>Your list is empty. Add some movies!</p>
          ) : (
            <ul className="movie-list gap-4">
              {myList.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  onRemove={removeFromMyList}
                  isMyListPage={true}
                  myList={myList}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
