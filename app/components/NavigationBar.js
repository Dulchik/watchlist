import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationBar({ myListCount }) {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <ul className="menu bg-base-200 menu-horizontal rounded-box">
      <li className={activePath === "/" ? "bg-base-100 rounded-box" : ""}>
        <Link href="/">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </div>
        </Link>
      </li>
      <li
        className={activePath === "/my-list" ? "bg-base-100 rounded-box" : ""}
      >
        <Link href="/my-list">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
                clipRule="evenodd"
              />
            </svg>
            My List
            <span className="badge badge-sm badge-neutral">{myListCount}</span>
          </div>
        </Link>
      </li>
      <li className={activePath === "/about" ? "bg-base-100 rounded-box" : ""}>
        <Link href="/about">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
            About
          </div>
        </Link>
      </li>
    </ul>
  );
}
