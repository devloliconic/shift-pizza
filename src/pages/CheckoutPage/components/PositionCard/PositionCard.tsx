import { Card } from 'antd';
import React from 'react';

interface Props {
  name: string;
  price: number;

  imagePath: string;
}

export const PositionCard = ({ name, price }: Props) => {
  return <Card title=""></Card>;
};
