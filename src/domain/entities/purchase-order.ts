import { Product } from "./product";

export class PurchaseOrder {
  id: string;
  product: Product;
  quantity: number;
  status: "pending" | "processed" | "cancelled";
  createDate: Date;
  deliveryDate?: Date;

  constructor(id: string, product: Product, quantity: number) {
    this.id = id;
    this.product = product;
    this.quantity = quantity;
    this.status = "pending";
    this.createDate = new Date();
  }
}
