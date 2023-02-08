import styled from "styled-components";

export const FormContainer = styled.form`
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 30px;
    width: 500px;    
    background-color: #eee;
    box-shadow: 2px 2px 8px rgb(82, 80, 80);
    border-radius: 3%;
`;

export const Legend = styled.legend`
    margin: 0 auto;
    font-size: 20px;
`;

export const Fieldset = styled.fieldset`
    border: none;
`;

export const Input = styled.input`
    margin-left: 5px ;
    padding: 5px;
    margin-bottom: 20px;    
    width: 100px;
    height: 25px;
    background-color: #eee;
`;

export const Select = styled.select`
    margin-left: 15px;
    border: grey;
    background-color: #eee;
`;

export const Loading = styled.p`
    color: teal;
`;

export const Failure = styled.p`
    color: crimson;
`;

export const Button = styled.button`   
    width: 500px;
    color: teal;
    border: none;
    font-size: 18px;

    &:hover {
        color: hsl(180, 100%, 35%);
    }
`;