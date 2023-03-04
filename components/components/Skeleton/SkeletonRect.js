const SkeletonRect = ({ className, style }) => {
  return (
    <div className={`${className}`} style={style}>
      <div className="bg-skeleton rounded h-2" />
    </div>
  );
};

export default SkeletonRect;
