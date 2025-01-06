import { toast } from "react-hot-toast";

const RemoveButton = ({ movie, onRemove }) => {
  const handleRemove = () => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    const updatedList = myList.filter((m) => m.imdbID !== movie.imdbID);

    localStorage.setItem("myList", JSON.stringify(updatedList));
    toast.success("Removed from List!");
    if (onRemove) onRemove(movie);
  };

  return (
    <button className="btn btn-outline btn-default" onClick={handleRemove}>
      Remove from List
    </button>
  );
};

export default RemoveButton;
