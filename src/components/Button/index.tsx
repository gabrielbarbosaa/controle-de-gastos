import React from 'react';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import * as S from './style';

interface IProps {
    children: React.ReactNode,
    onClick?: () => void
}

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const Button: React.FC<IProps> = ({children, onClick}) => {
    return (
        <StyledButton
            radius="md"
            onClick={onClick}
        >
            {children}
        </StyledButton>
    );
};

export default Button;