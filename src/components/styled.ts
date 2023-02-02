import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const InputLabel = styled.p`
  margin-top: 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${colors.black45};
`;

export const ErrorMessage = styled.p`
  margin: 0;
  color: ${colors.red};
  font-size: 14px;
  line-height: 22px;
`;
