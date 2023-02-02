import { message, Spin } from 'antd';
import React from 'react';

import { usePizzaListHook } from '@/api/queries/getPizzaList';
import { Layout } from '@/components/Layout';
import { PizzaCard } from '@/components/PizzaCard';
import { Menu } from '@/pages/MenuPage/styled';
import { useOrderStore } from '@/store/useOrderStore';

export const MenuPage = () => {
  const { data: pizzaList, isLoading } = usePizzaListHook();

  const addPosition = useOrderStore((state) => state.addPosition);

  const handleAddToCardClick = (data: {
    id: number;
    size: string;
    crust: string;
    price: number;
    img: string;
    name: string;
  }) => {
    addPosition(data);
    message.success('Пицца добавлена в карзину', 3);
  };

  if (isLoading) {
    return <Spin />;
  }

  return (
    <Layout>
      <Menu>
        {pizzaList
          ? pizzaList.map((it) => (
              <PizzaCard
                id={it.id}
                name={it.name}
                key={it.id}
                imagePath={it.img}
                ingredients={it.ingredients}
                price={it.price.default}
                isMenuCard={true}
                onAddCLick={handleAddToCardClick}
              />
            ))
          : null}
      </Menu>
    </Layout>
  );
};
