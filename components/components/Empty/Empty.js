const Empty = ({ message = "No data" }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p>{message}</p>
    </div>
  );
};

export default Empty;
