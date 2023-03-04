const Loading = ({ className }) => {
  return (
    <span
      className={`animate-spin-fast inline-block border-1 border-white !border-b-transparent
      rounded-[50%] w-6 h-6 ${className}`}
    />
  );
};

export default Loading;
