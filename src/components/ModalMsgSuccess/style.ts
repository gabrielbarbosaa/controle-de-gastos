import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > figure {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50px;
        width: 50px;
        height: 50px;
        background-color: ${props=> props.theme.colors.green[0]};

        svg {
            width: 35px;
            height: 35px;
            stroke: #FFFFFF;
        }
    }

    h1 {
        margin: 0 0 40px 0;
    }
`;