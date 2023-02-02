import React from 'react';

import { useOrderStore } from '@/store/useOrderStore';

import { Container, Content, Header, Title, Navigation, NavItem } from './styled';

interface Props {
  children: React.ReactNode;
}
export const Layout = ({ children }: Props) => {
  const orders = useOrderStore((state) => state.orders);
  const ordersCount = orders.length ? orders.length : 0;

  return (
    <Container>
      <Header>
        <Title to="/menu">🍕 Pizza и точка</Title>
        <Navigation>
          <NavItem to="/">Меню</NavItem>
          <NavItem to="/order">Оформить заказ ({ordersCount})</NavItem>
        </Navigation>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};
