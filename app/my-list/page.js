import NavigationBar from "../components/NavigationBar";

export default function MyList() {
  return (
    <main className="max-w-xl mx-auto">
      {/* HEADER */}
      <section>
        <div className="text-center my-10">
          <h1 className="text-3xl font-bold mb-5">WATCHLIST</h1>

          <NavigationBar />
        </div>
      </section>

      <section>
        <h1>My List</h1>
      </section>
    </main>
  );
}
