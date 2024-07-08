import styled from 'styled-components';

interface ButtonContainerProps {
    variant: 'primary' | 'secondary' | 'danger' | 'success';
}

const buttonVariantes = {
    primary: {
        color: 'white',
        backgroundColor: '#0070f3',
    },
    secondary: {
        color: 'white',
        backgroundColor: '#333',
    },
    success: {
        color: 'white',
        backgroundColor: 'green',
    },
    danger: {
        color: 'white',
        backgroundColor: 'red',
    },
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    height: 40px;
    width: 100px;  

    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};

    /* color: ${props => buttonVariantes[props.variant].color};
    background-color: ${props => buttonVariantes[props.variant].backgroundColor}; */


`   
