import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  @media (max-width: 375px) {
    flex-direction: column;
  }
  
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 375px) {
    width: 100%;
    padding-right: 0;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  @media (max-width: 375px) {
    width: 100%;
    display: inline-block;
    text-align: center;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  @media (max-width: 375px) {
    padding-left: 0;
  }
`;