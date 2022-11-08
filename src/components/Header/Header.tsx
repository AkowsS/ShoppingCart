import React, { useContext } from 'react';
import Logo from '../../assets/icons/logo.svg';
import CarIcon from '../../assets/icons/carIcon.svg';
import { Container,DivOtions,DivExtern,CartBox } from './Header.styles';
import { ValueContext } from '../../context/Cart';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const {Cartquantity} = useContext(ValueContext);
  
  
  return (
    <Container>
      <DivExtern>
        <Link to="/"><img src={Logo} alt="shopLogo"/></Link>
        <DivOtions>
          <Link to="/"><p>HOME</p></Link>
          <Link to=""><p>CONTACT</p></Link>
          <CartBox>
            <Link to="/cart-page"><img src={CarIcon} alt="carIcon"/><p>{Cartquantity()}</p></Link>
          </CartBox>
        </DivOtions>
      </DivExtern>
    </Container>
  );
};