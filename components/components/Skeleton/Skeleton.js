const Skeleton = ({ children, className }) => {
  return <div className={`animate-pulse ${className}`}>{children}</div>;
};

export default Skeleton;
