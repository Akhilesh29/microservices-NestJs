export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateOrderDto {
  userId: string;
  items: OrderItem[];
}

export interface UpdateOrderDto {
  status?: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';
}

export interface OrderEvent {
  type: 'ORDER_CREATED' | 'ORDER_UPDATED' | 'ORDER_CANCELLED';
  data: Order;
} 