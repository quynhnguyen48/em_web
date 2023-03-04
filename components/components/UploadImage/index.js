import { useEffect, useState } from "react"
import flatten from "lodash/flatten"
import { toast } from "react-toastify"
import { useRef } from "react"

import Button from "components/Button"
import Icon from "components/Icon"
import AssetItem from "components/AssetItem"
import { uploadMedia } from "services/api/mediaLibrary"

const UploadImage = ({
  data = [],
  className = "",
  multiple = false,
  clearUpload = false,
  onFinish,
}) => {
  const [assets, setAssets] = useState([])
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const ref = useRef()

  const chooseAssets = (e) => {
    let ImagesArray = Object.entries(e.target.files).map((e) => {
      return {
        name: e[1].name,
        type: e[1].type,
        size: e[1].size,
        data: URL.createObjectURL(e[1]),
      }
    })
    setAssets([...assets, ...ImagesArray])
    setUploadedFiles([...uploadedFiles, ...e.target.files])
  }

  const removeAsset = (assetIndex) => {
    setAssets(assets.filter((item, index) => index !== assetIndex))
  }

  const uploadAssets = async () => {
    try {
      setIsLoading(true)
      const promises = uploadedFiles?.map((file) => {
        const formData = new FormData()
        formData.append("files", file)
        return uploadMedia(formData)
      })
      const response = await Promise.all(promises)
      const files = flatten(response?.map((item) => item.data))
      if (files) {
        toast.success("Uploaded successfully")
        onFinish(files)
      }
    } catch (error) {
      // toast.error(getErrorMessage(error));
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (clearUpload) {
      setAssets([])
      setUploadedFiles([])
      ref.current.value = null
    }
  }, [clearUpload])

  return (
    <div className={className}>
      {!!assets?.length && (
        <>
          <Button
            loading={isLoading}
            btnType="outline"
            className="mb-4"
            onClick={() => uploadAssets()}
          >
            Upload {assets?.length} assets to library
          </Button>
          <div className="grid grid-cols-media gap-4 mb-4">
            {assets.map((asset, index) => (
              <AssetItem
                key={index}
                asset={asset}
                isBeforeUploading
                onRemove={() => removeAsset(index)}
              />
            ))}
          </div>
        </>
      )}
      {(multiple || (!multiple && !assets.length)) && (
        <div className="inline-flex items-center justify-center rounded-xl bg-background h-40 w-40 relative">
          <input
            ref={ref}
            type="file"
            className="h-full w-full opacity-0 cursor-pointer absolute z-20"
            onChange={(e) => chooseAssets(e)}
            multiple={multiple}
          />
          <Icon name="gallery" className="fill-gray w-6 h-6" />
        </div>
      )}
    </div>
  )
}

export default UploadImage
