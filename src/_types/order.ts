import { OrderPizza } from '@/_types/pizza';
import { UserAddress, UserDetails } from '@/_types/user';

export type CreateOrder = {
  pizzas: OrderPizza[];
  details: {
    user: UserDetails;
    address: UserAddress;
  };
};
