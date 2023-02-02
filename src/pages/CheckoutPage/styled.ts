import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

export const InfoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const TotalPrice = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${colors.primary6};
`;
