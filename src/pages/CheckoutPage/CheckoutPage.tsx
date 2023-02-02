import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '@/components/Layout';
import { PizzaCard } from '@/components/PizzaCard';
import { useOrderStore } from '@/store/useOrderStore';

export const CheckoutPage = () => {
  const navigate = useNavigate();

  const orders = useOrderStore((state) => state.orders);

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
      {orders.map((it) => (
        <PizzaCard name={it.name} imagePath={it.img} price={it.price} id={it.id} isMenuCard={false} key={it.id} />
      ))}
    </Layout>
  );
};
