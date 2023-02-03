import { message } from 'antd';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';

import { useCreateCoach } from '@/api/mutations/pathOrder';
import { useOrderStore } from '@/store/useOrderStore';

interface FormValues {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: Date;
  registrationAddress: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  comment: string;
}

export const useDataControlHook = (onModalClose: () => void) => {
  const { mutate: createOrder } = useCreateCoach();

  const orders = useOrderStore((state) => state.orders);
  const convertedOrdersListForQuery = orders.map((pizza) => ({ id: pizza.id, size: pizza.size, crust: pizza.crust }));

  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = (data: FormValues) => {
    const userDetails = {
      user: {
        firstname: data.firstName,
        lastname: data.lastName,
        birthDate: format(data.birthDate, 'dd.MM.yyyy'),
        registrationAddress: data.registrationAddress,
      },
      address: {
        city: data.city,
        street: data.street,
        house: data.house,
        apartment: data.apartment,
        comment: data.comment,
      },
    };

    createOrder(
      { pizzas: convertedOrdersListForQuery, details: userDetails },
      {
        onSuccess: () => {
          message.success('✨Заказ сформирован✨', 3);
          reset();
          onModalClose();
        },
        onError: () => {
          message.error('Ошибка в заполнении формы 😔', 3);
        },
      },
    );
  };
  return { handleSubmit, onSubmit, control, reset, isValid };
};
