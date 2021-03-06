import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerMenuOpen(true)} />
      </RightMenu>
      <BurgerNav show={burgerMenuOpen}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerMenuOpen(false)} />
        </CloseWrapper>
        <li>
          <a href="#"></a>Existing Inventory
        </li>
        <li>
          <a href="#"></a>Used Inventory
        </li>
        <li>
          <a href="#"></a>Trade-in
        </li>
        <li>
          <a href="#"></a>Cybertruck
        </li>
        <li>
          <a href="#"></a>Roadster
        </li>
        <li>
          <a href="#"></a>Semi
        </li>
        <li>
          <a href="#"></a>Charging
        </li>
        <li>
          <a href="#"></a>Powerwall
        </li>
        <li>
          <a href="#"></a>Commercial Energy
        </li>
        <li>
          <a href="#"></a>Utilities
        </li>
        <li>
          <a href="#"></a>Test Drive
        </li>
        <li>
          <a href="#"></a>Find Us
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  display: none;
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
