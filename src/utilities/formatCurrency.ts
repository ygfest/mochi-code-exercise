const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(value: string | number): string {
  const numberValue = typeof value === "string" ? parseFloat(value) : value;
  return CURRENCY_FORMATTER.format(numberValue);
}
