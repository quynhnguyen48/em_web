const Tag = ({ name, className, secondary = false }) => {
  return (
    <p className={`inline-block text-14 font-bold text-white px-2 py-[5px] capitalize ${secondary ? 'rounded-lg' : 'rounded-full'} ${className}`}>
      {name}
    </p>
  );
};

export default Tag;
