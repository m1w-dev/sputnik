export const formatPrice = (
  price: number | bigint | string,
  currency: Currency
) => new Intl.NumberFormat(undefined, {
  currency,
  style: 'currency',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
  .format(Number(price) / 100)

