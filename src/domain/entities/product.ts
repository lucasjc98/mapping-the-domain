import { randomUUID } from "node:crypto";

export class Product {
  id: string;
  name: string;
  description?: string;
  size?: string;
  color?: string;
  price: number;
  currentStock: number;
  minimumStock: number;

  constructor(
    id: string,
    name: string,
    price: number,
    currentStock: number,
    minimumStock: number,
    description?: string,
    size?: string,
    color?: string
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.price = price;
    this.currentStock = currentStock;
    this.minimumStock = minimumStock;
    this.description = description;
    this.size = size;
    this.color = color;
  }
}
