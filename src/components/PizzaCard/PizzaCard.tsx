import { CloseOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Card, Image } from 'antd';
import React from 'react';

import {
  AddToCartButton,
  CardWrapper,
  Dictionary,
  InfoBox,
  Price,
  Subtitle,
  Title,
} from '@/components/PizzaCard/styled';
import { Order } from '@/store/useOrderStore';

interface Props {
  name: string;
  imagePath: string;
  ingredients?: string[];
  price: number;
  id: number;
  onAddCLick?: (data: Order) => void;
  onRemoveItemClick?: (id: number) => void;
}

export const PizzaCard = ({ name, imagePath, ingredients, price, id, onAddCLick, onRemoveItemClick }: Props) => {
  const handleAddClick = () =>
    onAddCLick && onAddCLick({ name, id, price, img: imagePath, crust: 'chees', size: 'middle' });

  return (
    <Card
      title={
        <Title>
          {name}
          <Price>{price} ₽</Price>
          {onRemoveItemClick && <CloseOutlined onClick={() => onRemoveItemClick(id)} />}
        </Title>
      }
    >
      <CardWrapper>
        <InfoBox>
          <Image src={imagePath} width={150} />
        </InfoBox>
        {ingredients && (
          <InfoBox>
            <Subtitle>Состав: </Subtitle>
            <Dictionary> {ingredients.join(', ')}</Dictionary>
          </InfoBox>
        )}
      </CardWrapper>
      {onAddCLick && (
        <AddToCartButton>
          <Button onClick={handleAddClick}>
            <ShoppingCartOutlined />
            <PlusOutlined />
          </Button>
        </AddToCartButton>
      )}
    </Card>
  );
};
