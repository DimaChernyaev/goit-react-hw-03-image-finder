import styled from '@emotion/styled'
import { Form, Field } from 'formik';


export const SearchBar = styled(Form)`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    linear-gradient(to bottom, 
    #000 20%,
    rgba(0, 0, 0, 0.75) 40%,
    rgba(0, 0, 0, 0.50) 60%,
    rgba(0, 0, 0, 0.25) 80%,
    rgba(0, 0, 0, 0.10) );
    box-shadow: 0 0px 2px rgba(0, 0, 0, 0.034),
    0 0px 5px rgba(0, 0, 0, 0.048), 0 0px 10px rgba(0, 0, 0, 0.06),
    0 0px 18px rgba(0, 0, 0, 0.072), 0 0px 33px rgba(0, 0, 0, 0.086),
    0 0px 80px rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    position: relative;
`;

export const Input = styled(Field)`
    padding: 10px 48px;
    border-color: goldenrod;
    border-radius: 40px;
    width: 400px;
    font-size: 18px;
    text-alight: center;
`;


export const ButtonSearch = styled.button`
    position: absolute;
    left: 8px;
    padding: 5px;
    width: 40px;
    height: 40px;
    background-color: transparent;
    transform: translateY(10%);
    border-radius: 50%;
    border: none;
    cursor: pointer;
`