import { create } from 'zustand';

export interface Order {
  name: string;
  id: number;
  size: string;
  crust: string;

  img: string;

  price: number;
}
interface OrderState {
  orders: Order[];
  addPosition: (position: Order) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  addPosition: (position: Order) =>
    set((state) => ({
      orders: [...state.orders, position],
    })),
}));
