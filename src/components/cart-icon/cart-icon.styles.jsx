import styled from 'styled-components';
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: relative;
  width: 45px;
`;

export const ItemCountContainer = styled.span`
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
`;

export const ShoppingIcon = styled(ShoppingIconSVG)`
  height: 24px;
  width: 24px;
`;

// Display names
CartIconContainer.displayName = 'CartIconContainer';
ItemCountContainer.displayName = 'ItemCountContainer';
ShoppingIcon.displayName = 'ShoppingIcon';
