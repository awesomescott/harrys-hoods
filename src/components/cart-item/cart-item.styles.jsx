import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartItemImage = styled.img`
  width: 30%;
`;

export const ItemDetailsContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
  width: 70%;
`;

export const RemoveButtonContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding-right: 12px;
`;

// Display names
CartItemContainer.displayName = 'CartItemContainer';
CartItemImage.displayName = 'CartItemImage';
ItemDetailsContainer.displayName = 'ItemDetailsContainer';
RemoveButtonContainer.displayName = 'RemoveButtonContainer';
