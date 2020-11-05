import styled from 'styledcomponents'
import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #000;
    hight: 80px;
    margin-top: -80px;
    display: flex;
    justify-contents: center;
    align-item: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    hight: 80px;
    z-index: 1;
    with: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)``