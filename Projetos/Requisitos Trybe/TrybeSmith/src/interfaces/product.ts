export interface IProduct {
  name: string,
  amount: string,
}

export interface NewProduct extends IProduct {
  id: number,
  orderId?: number,
}

export interface ReturnStatus {
  status: number,
  message?: string,
}

export interface ReturnStatusAll extends ReturnStatus {
  products?: NewProduct[]
}

export interface ReturnStatusId extends ReturnStatus {
  addProduct?: NewProduct
}