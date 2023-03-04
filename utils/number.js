export const getPercentage = (val, total) => {
  if (!val || !total) return "0%"
  return `${Math.round((val / total) * 100)}%`
}

export const getPercentageNumber = (val, total) => {
  if (!val || !total) return 0
  return Math.round((val / total) * 100)
}

export const formatPrice = (price) => {
  return Number(price)
    .toLocaleString("it-IT", { style: "currency", currency: "VND" })
    .replace("VND", "")
    .replace("₫", "")
    .trim()
}

export const abbreviateNumber = (num, digits = 2) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return Math.abs(num) >= item.value
    })
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0"
}
