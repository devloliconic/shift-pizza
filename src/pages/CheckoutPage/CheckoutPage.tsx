import { Button, Result } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CreateOrderModal } from '@/Modals/CreateOrderModal';
import { Layout } from '@/components/Layout';
import { PizzaCard } from '@/components/PizzaCard';
import { InfoSection, OrderList, TotalPrice } from '@/pages/CheckoutPage/styled';
import { useOrderStore } from '@/store/useOrderStore';

export const CheckoutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const orders = useOrderStore((state) => state.orders);

  const removeItem = useOrderStore((state) => state.deletePosition);
  const handleRemoveItem = (id: number) => {
    removeItem(id);
  };

  const ordersAllPrice = orders.reduce((acc, it) => acc + it.price, 0);

  if (!orders.length) {
    return (
      <Layout>
        <Result status="warning" title="Корзина пуста" extra={<Button onClick={() => navigate('/')}>К меню</Button>} />
      </Layout>
    );
  }

  return (
    <Layout>
      <OrderList>
        {orders.map((it) => (
          <PizzaCard
            name={it.name}
            imagePath={it.img}
            price={it.price}
            id={it.id}
            isMenuCard={false}
            key={it.id}
            onRemoveItemClick={handleRemoveItem}
          />
        ))}
      </OrderList>
      <InfoSection>
        <Button onClick={() => setIsModalOpen(true)}>Оформить заказ</Button>
        <TotalPrice>Итоговая цена : {ordersAllPrice}</TotalPrice>
      </InfoSection>
      <CreateOrderModal isModalOpen={isModalOpen} onModalClose={() => setIsModalOpen(false)} />
    </Layout>
  );
};
