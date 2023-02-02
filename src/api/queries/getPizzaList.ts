import axios, { AxiosError } from 'axios';
import { QueryFunction, useQuery, UseQueryOptions } from 'react-query';

import { Pizza } from '@/_types/pizza';

type Response = Pizza[];
type QueryKey = ['pizzaList'];

const getPizzaList: QueryFunction<Response, QueryKey> = async () => {
  return (await axios.get('https://shift-winter-2023-backend.onrender.com/api/pizza')).data;
};

export const usePizzaListHook = <TData = Response>(
  options?: Omit<UseQueryOptions<Response, AxiosError, TData, QueryKey>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery({
    ...options,
    queryFn: getPizzaList,
    queryKey: ['pizzaList'],
  });
};
