import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const CardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  & > :first-child {
    margin-right: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: ${colors.black85};
`;

export const Price = styled.div`
  font-size: 20px;
  color: ${colors.gray9};
`;
export const InfoBox = styled.div``;

export const Subtitle = styled.p`
  margin: 0 0 2px;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  color: ${colors.black85};
`;

export const Dictionary = styled.p`
  margin: 0;
  line-height: 1.5;
  color: ${colors.black85};
`;

export const AddToCartButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
