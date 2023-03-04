import Skeleton from "components/Skeleton";
import SkeletonRect from "components/Skeleton/SkeletonRect";

const TableRowSkeleton = ({ headerGroups }) => {
  return (
    <div className="flex -ml-0.5">
      <div className="flex flex-1 items-center justify-between shadow-sm h-14 px-6 rounded-lg">
        <Skeleton className="flex items-center w-full">
          {headerGroups?.[0]?.headers?.map((header) => (
            <SkeletonRect
              key={header?.id}
              style={{
                width: header?.width,
                flex: `${header?.width} 0 auto`,
              }}
            />
          ))}
        </Skeleton>
      </div>
    </div>
  );
};

export default TableRowSkeleton;
