import styled from "@emotion/styled";

export const Container = styled.div`
    grid-area: MH;
    width: 100%;
    border-bottom: 1px solid ${(props: any) => props.theme.colors.purple[0]};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;

    > button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        border-radius: 30px;
        height: 40px;
        cursor: pointer;
        border: none;
        background: ${(props: any) => props.theme.colors.purple[0]};
        transition: 0.5s;

        > p {
            margin-right: 10px;
            color: ${(props: any) => props.theme.colors.white[0]};

        }

        > svg {
            stroke: ${(props: any) => props.theme.colors.white[0]};
        }

        :hover {
            background: ${(props: any) => props.theme.colors.purple[1]};
            transition: 0.5s;
        }
    }

    > div {
        margin-right: 15px;
        > p {
            margin: 0;
        }
    }

    .switch {
        position: absolute;
        left: 120px;
    }
`;