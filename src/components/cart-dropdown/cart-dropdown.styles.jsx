import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 260px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`

export const EmptyMessage = styled.div`
  color: black;
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  
  ::-webkit-scrollbar {
    width: 1px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(175, 175, 175);
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(0, 0, 0); 
  }
`