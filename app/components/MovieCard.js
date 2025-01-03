import Image from "next/image";
import AddButton from "./AddButton";

const MovieCard = ({ movies }) => {
  return movies.map((movie) => (
    <li
      key={movie.imdbID}
      className="card card-side bg-base-100 shadow-xl my-4 "
    >
      <Image
        src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
        alt={movie.Title}
        width={140}
        height={210}
        className="rounded"
        layout="intrinsic"
      />

      <div className="card-body truncate">
        <h2 className="card-title">
          {movie.Title} ({movie.Year})
        </h2>
        <p>{movie.Type} </p>
        <p>{movie.imdbRating}</p>
        <p>{movie.Language}</p>
        <div className="card-actions justify-end">
          <AddButton />
        </div>
      </div>
    </li>
  ));
};

export default MovieCard;