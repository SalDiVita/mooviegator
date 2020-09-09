import React from 'react';
import styled from 'styled-components';
import DarkMode from '../DarkMode/DarkMode';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index:19;

  li {
    padding: 18px 10px;
  }

 
    flex-flow: column nowrap;
    background-color: #3e3e3e;
    box-shadow:${({ open }) => open ? '-5px 0px 18px rgba(255,255,255,.3)' : '-5px 0px 18px rgba(255,255,255,0)'};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: all 0.3s ease-in-out;

    li {
      color: #fff;
    }
  
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
      <li className="mode-menu-switch"><DarkMode /></li>
    </Ul>
  )
}

export default RightNav
