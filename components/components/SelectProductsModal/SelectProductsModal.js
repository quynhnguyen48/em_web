import classNames from "classnames"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import sumBy from "lodash/sumBy"
import remove from "lodash/remove"
import cloneDeep from "lodash/cloneDeep"

import Modal from "components/Modal"
import Price from "components/Price"
import SearchInput from "components/SearchInput"
import ProductsTable from "pages/Products/components/ProductsTable"
import { getListProducts } from "services/api/products"
import { getStrapiMedia } from "utils/media"
import { formatPrice } from "utils/number"
import { formatStrapiArr, formatStrapiObj } from "utils/strapi"
import Button from "components/Button"
import Icon from "components/Icon"
import Avatar from "components/Avatar"
import { useDispatch } from "react-redux"
import { resetPageIndex } from "slice/tableSlice"

const SelectProductsModal = ({
  show,
  cartTitle = "Shopping Cart",
  showPrice = true,
  onClose,
  cartData,
  onUpdateCart,
}) => {
  const dispatch = useDispatch()

  const [detailData, setDetailData] = useState()
  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchKey, setSearchKey] = useState()
  const [cart, setCart] = useState([])

  const fetchIdRef = useRef(0)

  const fetchData = useCallback(async () => {
    const fetchId = ++fetchIdRef.current
    let filters = {}
    if (searchKey?.length) {
      filters = {
        $or: [{ title: { $containsi: searchKey } }, { code: { $containsi: searchKey } }],
      }
    }

    if (fetchId === fetchIdRef.current) {
      try {
        setLoading(true)
        const res = await getListProducts(
          {
            pageSize: 1000,
            page: 1,
          },
          filters,
          "preview"
        )
        if (res.data) {
          const listProductsData = formatStrapiArr(res.data)?.map((product) => ({
            ...product,
            images: formatStrapiArr(product?.images),
            brand: formatStrapiObj(product?.brand),
            category: formatStrapiObj(product?.category),
          }))
          if (listProductsData?.length > 0) {
            setDetailData(listProductsData?.[0])
          }
          setListProducts(listProductsData)
        }
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
  }, [searchKey])

  const subTotal = useMemo(() => {
    return sumBy(
      cart,
      (product) =>
        product?.amount *
        (parseInt(product?.variant?.discountPrice) || parseInt(product?.variant?.price))
    )
  }, [cart])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    if (detailData) {
      setSelectedProduct(detailData?.variants?.[0])
    }
  }, [detailData])

  useEffect(() => {
    if (!detailData && listProducts) {
      setDetailData(listProducts?.[0])
    }
  }, [detailData, listProducts])

  useEffect(() => {
    if (show) {
      setCart([...cartData])
    }
  }, [cartData, show])

  return (
    <Modal showCloseButton visibleModal={show} onClose={onClose} wrapperClassName="w-[1340px]">
      <p className="text-24 font-bold">Select Products</p>
      <div className="flex mt-6 gap-x-4">
        <div>
          <div className="w-full flex items-center gap-x-9">
            <SearchInput
              placeholder="Search by Product ID / Product Title"
              className="flex-1"
              onSearch={(value) => {
                dispatch(resetPageIndex())
                setSearchKey(value)
              }}
            />
          </div>
          <div
            className={classNames({
              "w-full": !detailData,
              "flex gap-x-6": detailData,
            })}
          >
            <ProductsTable
              data={listProducts}
              loading={loading}
              activeRow={detailData}
              onClickRow={setDetailData}
            />
          </div>
        </div>
        <div className="space-y-4 w-[378px]">
          {detailData && (
            <>
              <div className="relative">
                <img src={getStrapiMedia(detailData?.images?.[0])} alt={detailData?.title} />
                <div className="flex flex-wrap gap-2 absolute top-4 left-4">
                  {Array.isArray(detailData?.tags) &&
                    detailData?.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/20 rounded-lg p-2 text-12 text-primary font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              <p className="text-24 font-bold">{detailData?.title}</p>
              <div>
                <p className="text-18 text-gray5/50 line-through">
                  {formatPrice(parseInt(selectedProduct?.price))}
                </p>
                <Price
                  price={
                    parseInt(selectedProduct?.discountPrice) || parseInt(selectedProduct?.price)
                  }
                  priceClassName="text-[40px]"
                  suffix="vnđ"
                  suffixClassName="text-18"
                />
              </div>
              <p className="text-14 text-secondary/[87]">{detailData?.shortDescription}</p>
              <div className="flex items-center space-x-2">
                {detailData?.variants?.map((variant) => (
                  <p
                    key={variant?.id}
                    className={classNames(
                      "bg-primary/20 p-2 rounded-lg border-2 text-14 font-bold cursor-pointer",
                      {
                        "border-primary": selectedProduct?.id === variant?.id,
                        "border-transparent text-secondary/30": selectedProduct?.id !== variant?.id,
                      }
                    )}
                    onClick={() => setSelectedProduct(variant)}
                  >{`${variant?.size} ${variant?.unit}`}</p>
                ))}
              </div>
              <Button
                className="rounded-full"
                btnSize="medium"
                icon={<Icon name="cart" />}
                onClick={() =>
                  setCart((products) => [
                    ...products,
                    {
                      id: uuidv4(),
                      productId: detailData?.id,
                      variant: selectedProduct,
                      images: detailData?.images,
                      code: detailData?.code,
                      title: detailData?.title,
                      amount: 1,
                    },
                  ])
                }
              >
                ADD TO CART
              </Button>
            </>
          )}
        </div>
        <div className="w-[408px] p-6 bg-rightContent rounded-lg">
          <div className="flex justify-center space-x-1">
            <p className="text-16 font-bold">{cartTitle}</p>
            <p className="bg-primary w-8 h-8 flex items-center justify-center text-white font-bold rounded-full">
              {sumBy(cart, "amount")}
            </p>
          </div>
          <div className="py-6 flex flex-col space-y-4 border-b border-primary/30">
            {cart?.map((product) => (
              <div key={product?.id} className="flex items-center justify-between">
                <div className="flex flex-1 gap-x-3">
                  <Avatar
                    size={64}
                    round="12px"
                    src={getStrapiMedia(product?.images?.[0])}
                    name={product?.title}
                  />
                  <div className="flex flex-1 flex-col gap-y-1 text-14">
                    <p>{product?.title}</p>
                    <Price
                      price={
                        parseInt(product?.variant?.discountPrice) ||
                        parseInt(product?.variant?.price)
                      }
                    />
                    <p className="text-secondary/56">{`${product?.variant?.size}${product?.variant?.unit}`}</p>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-end space-x-4">
                  <div className="flex bg-primary/10 rounded-lg space-x-4 p-4">
                    <Button
                      disabled={product?.amount <= 1}
                      btnSize="auto"
                      btnType="text"
                      icon={<Icon name="minus-square" />}
                      onClick={() =>
                        setCart((products) => {
                          const productsData = cloneDeep(products)
                          const index = productsData?.findIndex(
                            (productItem) => productItem?.id === product?.id
                          )
                          productsData[index].amount = product?.amount - 1
                          return [...productsData]
                        })
                      }
                    />
                    <span className="font-bold">{product?.amount}</span>
                    <Button
                      btnSize="auto"
                      btnType="text"
                      icon={<Icon name="add-square" />}
                      onClick={() =>
                        setCart((products) => {
                          const productsData = cloneDeep(products)
                          const index = productsData?.findIndex(
                            (productItem) => productItem?.id === product?.id
                          )
                          productsData[index].amount = product?.amount + 1
                          return [...productsData]
                        })
                      }
                    />
                  </div>
                  <Button
                    btnSize="auto"
                    btnType="text"
                    icon={<Icon name="close-circle" className="fill-red" />}
                    onClick={() =>
                      setCart((products) => {
                        remove(products, (productItem) => {
                          return productItem?.id === product?.id
                        })

                        return [...products]
                      })
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          {showPrice && (
            <div className="mt-6 flex items-center justify-between">
              <p className="text-18">Sub.Total</p>
              <Price price={subTotal} />
            </div>
          )}
          <Button
            className="mt-5 h-12 w-full"
            btnSize="medium"
            onClick={() => {
              onUpdateCart(cart)
              onClose()
            }}
          >
            CONFIRM
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default SelectProductsModal
