import { Button, Modal } from 'antd';
import React from 'react';

import { DatePicker } from '@/components/DatePicker';
import { Input } from '@/components/Input';
import { useDataControlHook } from '@/modals/CreateOrderModal/hooks';

interface Props {
  isModalOpen: boolean;
  onModalClose: () => void;
}

export const CreateOrderModal = ({ isModalOpen, onModalClose }: Props) => {
  const { handleSubmit, onSubmit, control, reset, isValid } = useDataControlHook(onModalClose);

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
        <Input control={control} name="lastName" rules={{ required: true, min: 2, max: 30 }} label="Имя" />
        <Input control={control} name="firstName" rules={{ required: true, min: 2, max: 30 }} label="Фамилия" />
        <Input control={control} name="middleName" rules={{ min: 2, max: 30 }} label="Отчество " />
        <DatePicker control={control} name="birthDate" rules={{ required: true }} label="Дата рождения" />
        <Input control={control} name="registrationAddress" rules={{ min: 2, max: 30 }} label="Адрес проживания" />
        <Input control={control} name="city" rules={{ required: true, min: 2, max: 30 }} label="Город" />
        <Input control={control} name="street" rules={{ required: true, min: 2, max: 30 }} label="Улица" />
        <Input control={control} name="house" rules={{ required: true, min: 2, max: 30 }} label="Дом" />
        <Input control={control} name="apartment" rules={{ required: true, min: 2, max: 30 }} label="Квартира" />
        <Input control={control} name="comment" rules={{ required: true, min: 2, max: 30 }} label="Коментарий" />
      </form>
    </Modal>
  );
};
