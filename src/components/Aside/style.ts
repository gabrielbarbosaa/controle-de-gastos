import styled from "@emotion/styled";
import { Drawer } from '@mantine/core';
import { NavLink } from "react-router-dom";

export const Menu = styled(Drawer)`
    grid-area: AS;
    height: 100vh;
    //border-right: 1px solid ${props => props.theme.colors.purple[0]};
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    z-index: 999 !important;
`;

export const Container = styled.div`
    border-right: 1px solid ${props => props.theme.colors.purple[0]};
    grid-area: AS;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    z-index: 999 !important;

    > img {
        width: 40px;
    }
`;

export const SmallLogo = styled.img`
    width: 35px;
    margin-right: 15px;
`;

export const ClosedNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`;

export const Link = styled(NavLink)`
    margin-bottom: 20px;
    text-decoration: none;
    background-color: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    
    p {
        margin: 0 10px;
        color: #FFFFFF80;
    }
    
    svg {
        width: 30px;
        height: 30px;
        stroke: #FFFFFF80;
    }

    &.active {
        svg {
            width: 30px;
            height: 30px;
            stroke: ${props => props.theme.colors.purple[0]};
        } 
        
        p {
            color: ${props => props.theme.colors.purple[0]};
        }
    }
`;

export const OpenNav = styled.nav`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const Perfil = styled.div`
    > div:nth-child(1) {
        display: flex;
        align-items: center;
        margin-top: 50px;

        > img {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin-right: 10px;
        }
    
        > p {
            margin: 0;
            font-weight: 600;
        }
    }

    > div:nth-child(2) {
        display: flex;
        align-items: center;

        > p:nth-child(1) {
            margin-right: 5px;
        }

        > p:nth-child(2){
            font-weight: 700;
            color: ${(props: any) => props.theme.colors.green[0]};
        }
    }


`;