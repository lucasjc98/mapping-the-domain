import { Product } from "../domain/entities/product";

interface FetchStockHistoryUseCaseRequest {
  productId: string;
}

interface FetchStockHistoryUseCaseResponse {
  products: Product[];
}

export class FetchStockHistoryUseCase {
  async execute({ productId }: FetchStockHistoryUseCaseRequest) {}
}
