import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import SearchBar from './SearchBar';
import { withRouter, Link } from 'react-router-dom';


const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index:99999;
  background:#00a6fb;

  .logo {
    padding: 15px 0;
  }
`


const Navbar = (auth) => {

  return (
    <Nav className="navbar">
      <div className="alert">
        <h3>
          <Link to="/" style={{textDecoration: 'none'}}>Mooviegator</Link>
        </h3>
        </div>
      <div  className="search-bar"> 
      <SearchBar/>
      </div>
      <p className="user-logo">
          <Link to="/login-area" style={{textDecoration: 'none'}}><img src="../../../images/user.png" alt="Login icon Person"/></Link>
        </p>
      <Burger />

      
    </Nav>

  )
}


export default withRouter(Navbar);
