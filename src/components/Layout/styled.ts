import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '@/styles/colors';

export const Container = styled.div``;

export const Header = styled.header`
  height: 48px;
  background-color: ${colors.gray1};
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.6);
`;

export const Title = styled(Link)`
  font-size: 24px;
  line-height: 29px;
  color: ${colors.black85};
  text-decoration: none;

  transition: 0.2s all linear;

  &:hover {
    color: ${colors.primary6};
  }
`;

export const Content = styled.div`
  min-height: calc(100vh - 48px);
  background-color: ${colors.black2};
  padding: 15px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  > :first-child {
    margin-right: 20px;
  }
`;

export const NavItem = styled(Link)`
  font-size: 18px;
  color: ${colors.gray9};
  text-decoration: none;

  transition: 0.2s all linear;

  &:hover {
    color: ${colors.primary6};
  }
`;
