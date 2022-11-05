import styled from '@emotion/styled';
import { Button as ButtonMantine } from '@mantine/core';

export const Button = styled(ButtonMantine)`
    background-color: ${props=> props.theme.colors.purple[0]};
    transition: 0.5s;

    :hover {
        background-color: ${props=> props.theme.colors.purple[1]};
        transition: 0.5s;
    }

`;