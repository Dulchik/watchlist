const AddButton = () => {
  const handleAdd = () => {
    alert(123);
  };

  return (
    <button className="btn btn-primary" onClick={handleAdd}>
      Add to List
    </button>
  );
};

export default AddButton;
