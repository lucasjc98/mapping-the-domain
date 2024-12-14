import { Product } from "../domain/entities/product";

interface UpdateProductStockUseCaseRequest {
  productId: string;
  quantity: number;
}

interface UpdateProductStockUseCaseResponse {
  product: Product;
}

export class UpdateProductStockUseCase {
  async execute({ productId, quantity }: UpdateProductStockUseCaseRequest) {}
}
