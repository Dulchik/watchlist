import Image from "next/image";
import AddButton from "./AddButton";
import RemoveButton from "./RemoveButton";

const MovieCard = ({ movie, onAdd, onRemove, isMyListPage, myList }) => {
  return (
    <li className="card card-side bg-base-100 shadow-xl my-4">
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
          {isMyListPage ? (
            <RemoveButton movie={movie} onRemove={onRemove} />
          ) : (
            <AddButton movie={movie} myList={myList} onAdd={onAdd} />
          )}
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
