import styled from "@emotion/styled";

export const Container = styled.div<{type: string}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 70px;
    border-radius: 6px;
    padding-left: 10px;
    background-color: ${(props: any) => props.theme.colors.black[1]};
    border-left: 10px solid 
        ${(props: any) => props.type === 'receita' 
            ? props.theme.colors.green[0] 
            : props.theme.colors.red[0]
        };
    transition: 0.5s;
    margin-bottom: 10px;

    .trigger {
        background: none;
        border: none;
        cursor: pointer;
        margin-right: 10px;

        > svg {
            stroke: ${(props: any) => props.theme.colors.white[0]};
        }
    }

    .button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: none;
        border: none;
        cursor: pointer;
        color: ${(props: any) => props.theme.colors.white[0]};

        > svg {
            margin-right: 10px;
        }
    }

    .danger {
        color: ${(props: any) => props.theme.colors.red[0]};
    }
`;