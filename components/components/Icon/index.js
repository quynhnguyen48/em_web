import SVG from "react-inlinesvg";

const Icon = ({ name, ...props }) => {
  return <SVG src={`/icons/${name}.svg`} {...props} />;
};

export default Icon;
