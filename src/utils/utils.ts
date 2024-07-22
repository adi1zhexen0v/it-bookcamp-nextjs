export function getBooleanArray(count: number): boolean[] {
  if (count < 0 || count > 5) {
    throw new Error("Input must be a number between 0 and 5");
  }

  return Array(5).fill(false).map((_, index) => index < count);
}

export function calculatePrice(id: number, price: string): string {
  let multiplier = id % 2 === 0 ? 1.15 : 1.2;
  let finalPrice = +price.slice(1) * multiplier;
  return finalPrice.toFixed(2);
}