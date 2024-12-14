import { Product } from "../domain/entities/product";

interface VerifyProductStockUseCaseRequest {
  productId: string;
}

interface VerifyProductStockUseCaseResponse {
  product: Product;
}

export class VerifyProductStockUseCase {
  async execute({ productId }: VerifyProductStockUseCaseRequest) {}
}
