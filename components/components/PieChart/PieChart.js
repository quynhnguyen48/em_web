import { Cell, Pie, Tooltip, PieChart as ReactPieChart } from "recharts";

const PieChart = ({
  width,
  height,
  title,
  hideInfo,
  data,
  colors,
  className,
  vertical = false,
  showTooltip = false,
  CustomTooltip,
}) => {
  return (
    <div className={`text-center ${className} ${vertical ? 'flex items-center w-full' : ''}`}>
      <ReactPieChart width={width} height={height}>
        <Pie
          data={data}
          innerRadius={40}
          fill="#8884d8"
          paddingAngle={6}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        {
          showTooltip && <Tooltip content={<CustomTooltip />} />
        }
      </ReactPieChart>
      {!hideInfo && (
        <>
          {title && <p className="text-12 text-primary font-bold mb-4">{title}</p>}
          <div className="space-y-2 flex-1">
            {data?.map((item, i) => (
              <div
                key={i}
                className="flex justify-between items-center"
              >
                <div className="space-x-1.5">
                  <span
                    className="inline-block w-2 h-2 rounded"
                    style={{ backgroundColor: colors[i] }}
                  />
                  <span className="text-14">{item.name}</span>
                </div>
                <span className="text-14 font-bold">{`${item.value}%`}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PieChart;
