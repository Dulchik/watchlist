"use client";

import { VscGithubInverted } from "react-icons/vsc";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaBug } from "react-icons/fa";
import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";

export default function About() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    // Load the saved list from localStorage
    const savedList = localStorage.getItem("myList");
    if (savedList) {
      setMyList(JSON.parse(savedList));
    }
  }, []);

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
      <section className="text-center">
        <h1 className="text-2xl font-bold mb-4">About</h1>
        <p className="mb-8">
          This is a simple watchlist application where you can search for movies
          and add them to your personal watchlist.
        </p>

        <div className="space-y-4 flex justify-center items-start">
          <a
            href="https://github.com/Dulchik/watchlist"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center justify-center gap-1 card shadow-lg p-4 mt-4"
          >
            <VscGithubInverted />
            Code Source
          </a>
          <br />
          <a
            href="https://porfolio-ab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center justify-center gap-1 card shadow-lg p-4"
          >
            <AiOutlineCopyright />
            My Personal Website
          </a>
          <br />
          <a
            href="https://github.com/Dulchik/watchlist/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center justify-center gap-1 card shadow-lg p-4"
          >
            <FaBug />
            Report a Bug / Request a Feature
          </a>
        </div>
      </section>
    </main>
  );
}
