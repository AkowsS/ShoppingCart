import { Button, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { ValueContext } from '../../context/Cart';
import { Container, CartItem,ItemOptions,TextIformations,AmountItems,RemoveItemButton,AddItemButton,DecrementItemButton } from './CartItems.styles';
import {ProductCart} from '../../context/Cart';
import { Link } from 'react-router-dom';


interface CartItemsProps{
  product: ProductCart;
};

export const CartItems: React.FC <CartItemsProps> = (
 {product}
) => {
  const { incrementCart, decrementCart,removeItem } = useContext(ValueContext);
  //var valueItem = 0;
  
  return (
    <Container>
        <CartItem>
          <Link to={`/product-description/${product.id}`}><img src={product.image} alt="Product" /></Link>
          <TextIformations>
            <Link to={`/product-description/${product.id}`}><ItemOptions >{product.title}<br/></ItemOptions></Link>
            <ItemOptions>{product.count} unidade(s) </ItemOptions>
            <ItemOptions>Cor: verde</ItemOptions>
          </TextIformations>
          <AmountItems>
            <DecrementItemButton onClick={() => decrementCart(product.id)}>-</DecrementItemButton>
            <AddItemButton onClick={() => incrementCart(product.id)}>+</AddItemButton>
            <RemoveItemButton onClick={() => removeItem(product.id)}><p>x</p></RemoveItemButton>
          </AmountItems>
        </CartItem>
    </Container>
  );
};