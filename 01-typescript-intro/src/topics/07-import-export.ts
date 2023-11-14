import { Product, taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[] = [
  {
    description: 'Nokia A1',
    price: 150
  },
  {
    description: 'iPad Air',
    price: 350
  }
]

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

console.log(total, totalTax);