import styled from 'styled-components';
import { FaRegTimesCircle } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #999;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: cubic-bezier(.65,0,.16,1);
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
`;

export const CloseIcon = styled(FaRegTimesCircle)`
    color: #fff;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));

    &:hover {
        transition: 0.6s cubic-bezier(.65,0,.16,1);
        filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.2));
        color: #444;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: cubic-bezier(.65,0,.16,1); 
    color: #fff;

    &:hover {
        transition: 0.6s cubic-bezier(.65,0,.16,1);
        color: #444; 
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #444;
    filter: drop-shadow(2px 3px 5px rgba(0, 0, 0, 0.3));
    white-space: nowrap;
    padding: 16px 64px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    transition: cubic-bezier(.65,0,.16,1);
    text-decoration: none;

    &:hover {
        transition: 0.6s cubic-bezier(.65,0,.16,1);
        background: #fff;
        color: #444;
    }
`;