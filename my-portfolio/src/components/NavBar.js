import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

function NavBar({ currPage, handlePageChange }) {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='fixed-top'>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand
          href='#home'
          onClick={() => handlePageChange('Home')}
              className={currPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >Justin Connors
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav>
              <MDBNavbarItem>
                <MDBNavbarLink href='#about'
                onClick={() => handlePageChange('About')}
                className={currPage === 'About' ? 'nav-link active' : 'nav-link'}
                >About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#projects'
                onClick={() => handlePageChange('Projects')}
                className={currPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#contact'
                onClick={() => handlePageChange('Contact')}
                className={currPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >Contact
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default NavBar;