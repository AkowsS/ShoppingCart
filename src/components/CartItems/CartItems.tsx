import { Button, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { ValueContext } from '../../context/Cart';
import { Container, CartItem,ItemOptions,TextIformations,AmountItems,RemoveItemButton,AddItemButton,DecrementItemButton } from './CartItems.styles';
import {ProductCart} from '../../context/Cart';


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
          <img src={product.image} alt="Product" />
          <TextIformations>
            <ItemOptions>{product.title}<br/></ItemOptions>
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