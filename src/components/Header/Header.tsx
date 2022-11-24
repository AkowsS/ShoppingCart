import React, { useContext, useState } from 'react';
import Logo from '../../assets/icons/logo.svg';
import CarIcon from '../../assets/icons/carIcon.svg';
import { Container,DivOtions,DivExtern,CartBox,List,ListOptions } from './Header.styles';
import { ValueContext } from '../../context/Cart';
import { Link } from 'react-router-dom';
import MenuIcon from "../../assets/icons/menu-aberto.png"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';

export const Header: React.FC = () => {
  const {Cartquantity} = useContext(ValueContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <DivExtern>
        <Link to="/"><img src={Logo} alt="shopLogo"/></Link>
        <DivOtions>
          <div>
            <button 
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img src={MenuIcon} alt="" />
            </button>
            <ListOptions>
              <List><Link to="/"><p>HOME</p></Link></List>
              <List><Link to=""><p>CONTACT</p></Link></List>
              <List><Link to="/login"><p>LOGIN</p></Link></List>
              <List>
                <CartBox>
                  <Link to="/cart-page"><img src={CarIcon} alt="carIcon"/><p>{Cartquantity()}</p></Link>
                </CartBox>
              </List>
            </ListOptions>
            <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            >
              <List onClick={handleClose}><Link to="/"><p>HOME</p></Link></List>
              <List onClick={handleClose}><Link to=""><p>CONTACT</p></Link></List>
              <List onClick={handleClose}><Link to="/login"><p>LOGIN</p></Link></List>
              <List onClick={handleClose}>
                <CartBox>
                  <Link to="/cart-page"><img src={CarIcon} alt="carIcon"/><p>{Cartquantity()}</p></Link>
                </CartBox>
              </List>
            </Menu>
          </div>
        </DivOtions>
      </DivExtern>
    </Container>
  );
};