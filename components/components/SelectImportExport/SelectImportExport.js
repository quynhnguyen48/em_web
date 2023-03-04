import classNames from "classnames"
import Button from "components/Button"
import Modal from "components/Modal"
import { useState } from "react"
import readXlsxFile from 'read-excel-file'
import axios from 'axios';
const IMPORT = "import"
const EXPORT = "export"

const SelectImportExport = ({ show, handleNext, onClose }) => {
  const [selectedType, setSelectedType] = useState()

  return (
    <>
      <input type="file" id="input" hidden 
        onChange={(e) => {
          readXlsxFile(e.target.files[0]).then((data) => {
            axios.post("http://localhost:1337/api/drugs/bulkCreate", {
              data,
            })
              .then(response => {
              }).finally(() => {
              });
          })
        }}
      />
      <Modal
        showCloseButton
        visibleModal={show}
        onClose={onClose}
        wrapperClassName="w-[588px]"
        contentClassName="!min-h-[0]"
      >
        <p className="text-24 font-bold">Select Imports or Exports</p>
        <div className="flex justify-center gap-x-40 mt-10">
          {[IMPORT, EXPORT].map((type) => (
            <div
              key={type}
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setSelectedType(type)}
            >
              <div
                className={classNames(
                  "w-20 h-20 rounded-full flex items-center justify-center bg-primary/10",
                  {
                    "border-2 border-primary": selectedType === type,
                  }
                )}
              >
                <img src={`/icons/${type}-circle.svg`} alt={type} />
              </div>
              <p className="font-bold mt-4 capitalize">{type}</p>
            </div>
          ))}
        </div>
        <Button
          disabled={!selectedType}
          className="mt-10 w-full"
          onClick={() => {
            const input = document.getElementById('input')
            input.click();
          }}
        >
          NEXT
        </Button>
      </Modal>
    </>
  )
}

export default SelectImportExport
