import styled from "styled-components";
import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    @media (max-width: 500px) {
        min-width: 300px;
    }
`

export const PaymentButton = styled(Button)`
    margin: 30px auto 0;
`