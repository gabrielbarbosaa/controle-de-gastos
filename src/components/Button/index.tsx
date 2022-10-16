import React from 'react';
import { ButtonProps, createPolymorphicComponent } from '@mantine/core';
import * as S from './style';

interface IProps {
    children: React.ReactNode
}

const StyledButton = createPolymorphicComponent<'button', ButtonProps>(S.Button);

const Button: React.FC<IProps> = ({children}) => {
    return (
        <StyledButton
            variant="outline"
            radius="md"
        >
            {children}
        </StyledButton>
    );
};

export default Button;