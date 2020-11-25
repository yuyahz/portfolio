import styled from 'styled-components';
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#fff' : '#444')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${({ dark }) => (dark ? '#444' : '#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    display: flex;
    justify-content:center;
    align-items: center;
    transition: 1s cubic-bezier(.65,0,.16,1);
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.6));

    &:hover {
        transition: 1s cubic-bezier(.65,0,.16,1);
        background: ${({primary}) => (primary ? '#444' : '#fff')};
        color: ${({dark}) => (dark ? '#fff' : '#444')};
        filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.6));
    }
`