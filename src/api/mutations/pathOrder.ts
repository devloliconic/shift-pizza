import { MutationFunction, useMutation } from 'react-query';

import { CreateOrder } from '@/_types/order';
import { http } from '@/api/http';

const createOrder: MutationFunction<unknown, CreateOrder> = async ({ pizzas, details }) => {
  return (
    await http.post('pizza/createOrder', {
      pizzas,
      details,
    })
  ).data;
};

export const useCreateCoach = () => {
  return useMutation(createOrder);
};
