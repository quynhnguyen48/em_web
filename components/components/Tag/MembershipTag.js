const Tag = ({ name, className, secondary = false, color, backgroundColor }) => {
  return (
    <p 
      style={{
        padding: "10px",
        alignItems: "center",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        width: "80px",
        backgroundColor,
      }}
      className={`inline-block text-14 font-bold text-black capitalize ${secondary ? 'rounded-lg' : 'rounded-full'} ${className}`}>
      <svg 
      style={{fill: color}}
      className={`${className}`} xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 1024 1024" version="1.1"><path d="M134.736842 970.105263v-80.842105h754.526316v80.842105H134.736842z m9.997474-572.766316L200.165053 727.578947h620.058947l42.738526-339.752421-175.238737 156.429474-189.170526-328.434526-189.251368 328.434526-164.567579-146.917053z m563.388631 20.345264L970.105263 183.808 891.499789 808.421053H131.772632L26.947368 183.808l261.982316 233.876211L498.526316 53.894737l209.596631 363.789474z"/></svg>
      <span style={{
        color,
        textAlign: "center"
      }}>{name}</span>
    </p>
  );
};

export default Tag;
