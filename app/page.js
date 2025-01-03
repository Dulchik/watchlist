"use client";

export default function Home() {
  const handleSearch = () => {
    alert("your mom");
  };

  return (
    <main className="max-w-md mx-auto">
      {/* HEADER */}
      <section>
        <div className="flex  justify-center my-10">
          <h1 className="text-3xl font-bold">WATCHLIST</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="space-x-5">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button className="btn px-7" onClick={handleSearch}>
            Search
          </button>
        </div>
        <div></div>
      </section>

      {/* FOOTER */}
      <section></section>
    </main>
  );
}
