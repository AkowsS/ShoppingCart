import { Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { CartItems } from '../../components/CartItems';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ValueContext } from '../../context/Cart';
import { Container, DivIntern,PaymentArea,DivValues,TotalValue,ItemsArea,FinishButton } from './CartPage.styles';


export const CartPage: React.FC = () => {
  const {cart, priceCart} = useContext(ValueContext);


  //
  return (
    <Container>
      <Header/>
        <DivIntern>
          <ItemsArea>
            {
              cart?.map(product => <CartItems product = {product}/>)
            } 
          </ItemsArea>
          <PaymentArea>
            <DivValues><p>Freight</p><span>R$ 00,00</span></DivValues>
            <DivValues><p>Discount</p><span>- R$ 00,00</span></DivValues>
            <TotalValue></TotalValue>
            <DivValues><p>Total</p><span>U$ {priceCart()}</span></DivValues>
            <FinishButton><p>Finish Purchase</p></FinishButton>
          </PaymentArea>
        </DivIntern>

      <Footer/>
    </Container>
  );
};