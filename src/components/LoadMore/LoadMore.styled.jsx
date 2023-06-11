import styled from '@emotion/styled'

export const ButtonMore = styled.button`
    display: inline-flex;
    text-align: center;
    gap: 5px;
    padding: 8px 20px;
    font-weight: 400;
    font-size: 18px;

    background-color: #ffffff;
    border: 2px solid goldenrod;
    border-radius: 40px;
    cursor: pointer;

    transition: color 250ms linear,
    border-color 250ms linear,
    box-shadow 250ms linear;

    &:hover {
        color: rgb(204, 103, 14);
        border-color: rgb(204, 103, 14);
        box-shadow: 1px -1px 2px rgba(78,78,78,0.8);
    }
`;