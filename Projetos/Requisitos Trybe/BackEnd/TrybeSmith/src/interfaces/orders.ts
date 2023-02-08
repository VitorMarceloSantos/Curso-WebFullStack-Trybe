export interface Order {
  id: number,
  userId: number,
  productsIds: number[]
}

export interface OrderStatus {
  status: number,
  message?: string,
  orders?: Order[]
}