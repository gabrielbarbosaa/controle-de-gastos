import styled from '@emotion/styled';
import { Button as ButtonMantine } from '@mantine/core';

export const Button = styled(ButtonMantine)`
    background-color: ${props=> props.theme.colors.blue[0]};

    :hover {
        background-color: ${props=> props.theme.colors.purple[0]};
    }

`;