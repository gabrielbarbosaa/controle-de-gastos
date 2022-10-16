import styled from "@emotion/styled";
import { Drawer } from '@mantine/core';

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