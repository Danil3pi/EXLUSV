import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { menuData } from '../data/MenuData';
import { Button } from './Button';

import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
    

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    width: 100%;
    z-index: 1000;
    
    padding: 1rem 2rem;

`;

const NavLink = css`
    text-decoration: none;
    color: #fff;
    
    display: flex;
    align-items: center;

    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

const Logo = styled(Link)`
    ${NavLink};
`;

const MenyBars = styled(FaBars)`//Нужно будет наследоваться от FaBars Чтобы при медиазапросе сделать Бургер
    display: none;

    @media screen and (max-width: 768px){
        display: block;

        cursor: pointer;

        height: 40px;
        width: 40px;

        color: #f4d7d7;

        //My be it's no important
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1000;
        transform: translate(-50%, 15%);
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width : 768px) {
        display: none;
    }
`;

const NavMenuLink = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
     @media screen and (max-width : 768px) {
        display: none;
    }
`;

const NavBar = () => {
    return (
        <Nav>
            <Logo to="/">EXLUSV</Logo>
            <MenyBars /> {/* Это для мобильной версии */}
            <NavMenu >
                {menuData.map((item, index) => (
                    <NavMenuLink to={item.link} key={index}>
                        {item.title}
                    </NavMenuLink>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/cantact">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default NavBar
