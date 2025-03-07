import styled from 'styled-components';

export const CheckoutHeaderContainer = styled.div`
  border-bottom: 1px solid darkgrey;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`;

export const CheckoutPageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 50px auto 0;
  min-height: 80vh;
  width: 55%;

  button {
    margin-left: auto;
    margin-top: 50px;
  }

  @media screen and (max-width: 800px) {
    max-width: 450px;
    width: 100%;
  }
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 800px) {
    width: 22%;
    
    &:last-child {
      width: 12%;
    }
  }
`;

export const TotalContainer = styled.div`
  font-size: 36px;
  margin-left: auto;
  margin-top: 30px;
`;

export const WarningContainer = styled.div`
  color: red;
  font-size: 24px;
  margin-top: 40px;
  text-align: center;
`;

// Display names
CheckoutHeaderContainer.displayName = 'CheckoutHeaderContainer';
CheckoutPageContainer.displayName = 'CheckoutPageContainer';
HeaderBlockContainer.displayName = 'HeaderBlockContainer';
TotalContainer.displayName = 'TotalContainer';
WarningContainer.displayName = 'WarningContainer';
