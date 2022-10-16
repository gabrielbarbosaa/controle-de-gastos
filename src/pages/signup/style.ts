import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom'
import {
    Button as ButtonMantine
} from '@mantine/core';;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BackButton = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: ${props => props.theme.colors.white[0]};
    border: 1px solid ${props => props.theme.colors.white[0]};
    border-radius: 100%;
    position: absolute;
    left: 20px;
    transition: 0.5s all;

    :hover {
        border: 1px solid ${props => props.theme.colors.white[1]};
        transition: 0.5s all;
    }
`;

export const Button = styled(ButtonMantine)`
    background-color: ${props => props.theme.colors.purple[0]};
    transition: 0.5s all ease-in;

    :hover {
        background-color: ${props => props.theme.colors.purple[1]};
        transition: 0.5s all ease-in-out;
    }
`;