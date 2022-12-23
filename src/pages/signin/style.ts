import styled from "@emotion/styled";
import {
    Button as ButtonMantine
} from '@mantine/core';
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container-card{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .content{
        background-color: ${(props: any) => props.theme.colors.purple[0]};
        width: 50%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .item {
        
    }
`;

export const Button = styled(ButtonMantine)`
    background-color: ${props => props.theme.colors.purple[0]};
    transition: 0.5s all ease-in;

    :hover {
        background-color: ${props => props.theme.colors.purple[1]};
        transition: 0.5s all  ease-in-out;
    }
`;

export const CreateAcount = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};

    :hover {
        color: ${props => props.theme.colors.white[1]};
    }
`;

export const RecoveryPassword = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.colors.white[0]};

    :hover {
        color: ${props => props.theme.colors.white[1]};
    }
`;