import styled from "@emotion/styled";
import { Field, Form } from "formik";

export const Title = styled.h1`
    font-size: 26px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    color: #33C1FF;
    margin-bottom: 30px;
`;

export const LoginLabel = styled(Field)`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const InputTitle = styled.span`
    font-weight: 600;
    color: #33C1FF;
`;

export const LoginWrap = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 50px 10px 50px 10px;
        
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const FormWrap = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`;

