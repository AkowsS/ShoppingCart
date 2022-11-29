import React, { useContext } from 'react';
import { Container} from './ProductDescriptionPage.styles';
import { ValueContext } from '../../context/Cart';
import { Header,Footer,Description } from "components/";

export function ProductDescriptionPage({data}:any){
  const {product} = useContext(ValueContext);
  
  return (
    <Container>
      <Header/>
        <Description data = {product}/>
      <Footer/>
    </Container>
  );
};