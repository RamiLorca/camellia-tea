import styled from 'styled-components';
import { ReactComponent as ShoppingSvg } from '../../assets/shopping-bag.svg';

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 34px;
  height: 34px;
  margin-bottom: 9px;
`;

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${({ isCheckoutPage }) => (isCheckoutPage ? 'none' : 'auto')};
  opacity: ${({ isCheckoutPage }) => (isCheckoutPage ? 0.5 : 1)};
  cursor: pointer;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 15px;
  font-weight: 500;
  bottom: 10px;
`;
  