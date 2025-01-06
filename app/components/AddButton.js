import { toast } from "react-hot-toast";

const AddButton = ({ movie, onAdd, myList }) => {
  const isAlreadyAdded = myList.some((m) => m.imdbID === movie.imdbID);

  const handleAdd = () => {
    if (isAlreadyAdded) {
      toast.error("Movie already in the list!");
      return;
    }

    const updatedList = [...myList, movie];
    localStorage.setItem("myList", JSON.stringify(updatedList));
    toast.success("Added to List!");
    if (onAdd) onAdd(movie);
  };

  return (
    <button
      className={`btn ${
        isAlreadyAdded ? "btn-disabled" : "btn-primary btn-outline"
      }`}
      onClick={handleAdd}
      disabled={isAlreadyAdded}
    >
      {isAlreadyAdded ? "Already Added" : "Add to List"}
    </button>
  );
};

export default AddButton;
