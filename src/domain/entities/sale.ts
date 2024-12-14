import { Product } from "./product";

export class Sale {
  id: string;
  product: Product;
  quantity: number;
  date: Date;
  salePrice: number;

  constructor(
    id: string,
    product: Product,
    quantity: number,
    salePrice: number
  ) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.date = new Date();
    this.salePrice = salePrice;
  }
}
