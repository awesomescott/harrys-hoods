import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid darkgrey;
  display: flex;
  font-size: 20px;
  min-height: 100px;
  padding: 15px 0;
  width: 100%;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  width: 23%;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

export const RemoveButtonContainer = styled.div`
  cursor: pointer;
  padding-left: 12px;
`;

// Display names
CheckoutItemContainer.displayName = 'CheckoutItemContainer';
ImageContainer.displayName = 'ImageContainer';
QuantityContainer.displayName = 'QuantityContainer';
RemoveButtonContainer.displayName = 'RemoveButtonContainer';
TextContainer.displayName = 'TextContainer';
