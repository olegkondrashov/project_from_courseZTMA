import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`
export const SpanItem = styled.span`
  width: 23%;
` 

export const ImageContainer = styled(SpanItem)`
  padding-right: 15px;

  img {
        width: 100%;
        height: 100%;
      }
`

export const Quantity = styled(SpanItem)`
  display: flex;
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.div`
  margin: 0 10px;
`

export const RemoveButton = styled(Arrow)`
  padding-left: 12px;
`
