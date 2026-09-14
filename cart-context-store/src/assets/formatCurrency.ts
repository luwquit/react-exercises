const formatCurrency = (priceCents: number) => {
  const price = (priceCents / 100).toFixed(2);
  return `$${price}`;
};

export default formatCurrency;