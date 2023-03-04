import { getStrapiMedia } from "utils/media";
import Icon from "../Icon";

const AssetItem = ({
  isBeforeUploading,
  isChooseAssets = false,
  isSelected = false,
  asset,
  onClick,
  onRemove,
}) => {
  return (
    <button
      type="button"
      className="flex items-start flex-col rounded-lg overflow-hidden shadow-sm bg-primary relative"
      onClick={onClick}
    >
      {isBeforeUploading && (
        <div
          onClick={onRemove}
          className="absolute cursor-pointer top-2 right-2 z-20"
        >
          <Icon
            name="close-circle"
            className="fill-red bg-white rounded-full"
          />
        </div>
      )}
      {isChooseAssets && (
        <div className="absolute top-2 left-2 z-20">
          <Icon
            name={isSelected ? "check" : "uncheck"}
            className={`rounded-md ${
              isSelected ? "fill-primary" : "fill-uncheck"
            } w-6 h-6`}
          />
        </div>
      )}
      <div className="bg-white w-full ">
        <div className="h-40 bg-white bg-media flex items-stretch justify-center relative z-10">
          <img
            key={asset?.updatedAt}
            src={isBeforeUploading ? asset.data : getStrapiMedia(asset)}
            alt="Media"
            className="max-h-full"
          />
        </div>
      </div>
      <div className="px-4 py-2 rounded-b-xl text-left">
        <b className="text-white break-all">{asset?.name}</b>
      </div>
    </button>
  );
};

export default AssetItem;
