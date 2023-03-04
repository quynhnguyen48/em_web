import { useCallback, useEffect, useState } from "react"
import cloneDeep from "lodash/cloneDeep"

import Drawer from "components/Drawer";
import AssetItem from "components/AssetItem"
import AddNewAssetDrawer from "components/AddNewAssetDrawer"
import SearchInput from "components/SearchInput"
import Button from "components/Button"
import { getMediaLibrary, getMediaLibraryByName } from "services/api/mediaLibrary"

const ChooseAssetsFromLibraryDrawer = ({
   openDrawer,
   multiple = false,
   onClose,
   onFinish,
}) => {
  const [visibleAddNewAssetDrawer, setVisibleAddNewAssetDrawer] = useState(false)
  const [assets, setAssets] = useState([])
  const [assetsSelected, setAssetsSelected] = useState([])
  const [searchValue, setSearchValue] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        if (openDrawer) {
          setAssetsSelected([])
          const mediaRes = await getMediaLibrary()
          setAssets(mediaRes.data)
        }
      } catch (error) {}
    })()
  }, [openDrawer])

  const selectAsset = useCallback((asset) => {
    if (multiple) {
      const newAssetsSelected = cloneDeep(assetsSelected)
      const pos = newAssetsSelected.findIndex(a => a.id === asset.id)
      pos === -1 ? newAssetsSelected.push(asset) : newAssetsSelected.splice(pos, 1)
      setAssetsSelected(newAssetsSelected)
    } else {
      setAssetsSelected([asset])
    }
  }, [assetsSelected, multiple])

  const searchAsset = async (value) => {
    try {
      setSearchValue(value)
      const mediaRes = await getMediaLibraryByName(value)
      setAssets(mediaRes.data)
    } catch (error) {}
  }

  const finishUploadAssets = useCallback((assets) => {
    if (multiple) {
      setAssetsSelected([...assetsSelected, ...assets])
    } else {
      setAssetsSelected(assets)
    }
    setAssets((oldAssets) => ([
      ...assets,
      ...oldAssets,
    ]))
    setVisibleAddNewAssetDrawer(false)
  }, [assetsSelected, multiple])

  return (
    <Drawer open={openDrawer} onClose={onClose} contentClassName="pb-0">
      <div>
        <h4 className="text-18 font-bold">Add New Assets</h4>
        <div className="mt-6">
          <SearchInput
            placeholder="Search by Asset Name"
            className="flex-1"
            value={searchValue}
            onChange={(e) => searchAsset(e.currentTarget.value)}
          />
        </div>
      </div>
      <div className="mt-6 space-y-6 flex-1 overflow-y-auto">
        <div className="grid grid-cols-media gap-4">
          {
            assets?.map(asset => (
              <AssetItem
                key={asset.id}
                isSelected={!!assetsSelected.some(a => a?.id === asset?.id)}
                isChooseAssets
                asset={asset}
                onClick={() => selectAsset(asset)}
              />
            ))
          }
        </div>
      </div>
      <div className="sticky bottom-0 bg-white w-full z-20 py-4 px-2 flex justify-between">
        {
          !!assetsSelected.length &&
          <Button type="button" onClick={() => {
            onFinish(multiple ? assetsSelected : assetsSelected[0])
            onClose()
          }}>Finish</Button>
        }
        <Button type="button" btnType="outline" onClick={() => setVisibleAddNewAssetDrawer(true)}>Add more assets</Button>
      </div>

      <AddNewAssetDrawer
        onClose={() => setVisibleAddNewAssetDrawer(false)}
        openDrawer={visibleAddNewAssetDrawer}
        onFinish={(assets) => {
          finishUploadAssets(assets)
        }}
        multiple={multiple}
      />
    </Drawer>
  );
};

export default ChooseAssetsFromLibraryDrawer;
