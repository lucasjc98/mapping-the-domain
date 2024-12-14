import { Product } from "../domain/entities/product";

interface AddProductUseCaseRequest {
  name: string;
  description?: string | null;
  size?: string | null;
  color?: string | null;
  price: number;
  currentStock: number;
  minimumStock: number;
}

interface AddProductUseCaseResponse {
  product: Product;
}

export class AddProductUseCase {
  async execute({
    name,
    description,
    size,
    color,
    price,
    currentStock,
    minimumStock,
  }: AddProductUseCaseRequest) {}
}
