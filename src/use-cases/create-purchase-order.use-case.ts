import { PurchaseOrder } from "../domain/entities/purchase-order";

interface CreatePurchaseOrderUseCaseRequest {
  productId: string;
  quantity: number;
}

interface CreatePurchaseOrderUseCaseResponse {
  purchaseOrder: PurchaseOrder;
}

export class CreatePurchaseOrderUseCase {
  async execute({ productId, quantity }: CreatePurchaseOrderUseCaseRequest) {}
}
