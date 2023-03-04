import ReactAvatar from "react-avatar";

const Avatar = ({ size = 32, round = true, name, icon, src, className, children }) => {
  return (
    <ReactAvatar
      round={round}
      size={size}
      src={src}
      name={name}
      icon={icon}
      className={`!bg-primary text-white font-bold ${className}`}
    />
  );
};

export default Avatar;
