import { Button, Modal } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';

import { DatePicker } from '@/components/DatePicker';
import { Input } from '@/components/Input';

interface Props {
  isModalOpen: boolean;
  onModalClose: () => void;
}

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

export const CreateOrderModal = ({ isModalOpen, onModalClose }: Props) => {
  const {
    reset,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <Modal
      title="Оформление заказа"
      open={isModalOpen}
      onCancel={() => {
        onModalClose();
        reset();
      }}
      width={572}
      footer={[
        <Button key="submit" style={{ width: '50%' }} disabled={!isValid} onClick={handleSubmit(onSubmit)}>
          Заказать
        </Button>,
      ]}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="lastName" rules={{ required: true, min: 2, max: 2 }} label="Имя" />
        <Input control={control} name="firstName" rules={{ required: true, min: 2, max: 2 }} label="Фамилия" />
        <Input control={control} name="middleName" rules={{ min: 2, max: 2 }} label="Отчество " />
        <DatePicker control={control} name="birthDate" rules={{ required: true }} label="Дата рождения" />
        <Input control={control} name="registrationAddress" rules={{ min: 2, max: 2 }} label="Адрес проживания" />
        <Input control={control} name="city" rules={{ required: true, min: 2, max: 2 }} label="Город" />
        <Input control={control} name="street" rules={{ required: true, min: 2, max: 2 }} label="Улица" />
        <Input control={control} name="house" rules={{ required: true, min: 2, max: 2 }} label="Дом" />
        <Input control={control} name="apartment" rules={{ required: true, min: 2, max: 2 }} label="Квартира" />
      </form>
    </Modal>
  );
};
