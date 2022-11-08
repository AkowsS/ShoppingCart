import React, { useContext } from 'react';
import {Card} from '../Card/Card';
import { Container } from './Products.styles';
import { ValueContext } from '../../context/Cart';

export const Products: React.FC = () => {
  const {product} = useContext(ValueContext);

  return (
    <Container>
      <Card data = {product}/>
    </Container>
  );
};