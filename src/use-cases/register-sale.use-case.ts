import { Sale } from "../domain/entities/sale";

interface RegisterSaleUseCaseRequest {
  productId: string;
  quantity: number;
}

interface RegisterSaleUseCaseResponse {
  sale: Sale;
}

export class RegisterSaleUseCase {
  async execute({ productId, quantity }: RegisterSaleUseCaseRequest) {}
}
