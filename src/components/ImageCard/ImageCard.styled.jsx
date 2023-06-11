import styled from '@emotion/styled'

export const Image = styled.img`
    display: block;
    width: 350px;
    max-height: 200px;
` ;

export const ImageItem = styled.li`
    flex-basis: calc(25%  - 30px);
    box-shadow: -3px 5px 8px 0px rgba(40,37,37,0.9);
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;
    overflow: hidden;
    transition: box-shadow 300ms linear;
        &:hover {
            box-shadow: 1px 1px 4px 6px goldenrod;
        }
`;
