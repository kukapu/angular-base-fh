
export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150
}

const tablet: Product = {
  description: 'iPad Air',
  price: 350
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation(options: TaxCalculationOptions): [number, number] {
// function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

  const { tax, products } = options;

  let total = 0;

  products.forEach((product) => {
    total += product.price;
  });

  return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax
});

console.log(total, totalTax);



