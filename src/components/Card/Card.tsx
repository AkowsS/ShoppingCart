import { useContext} from 'react';
import { 
  Container,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  AddtoCar,
  CentralizeItens,
  ExternDiv,
 } from './Card.styles';
import { ProductInfo, ValueContext } from '../../context/Cart';
import { Link } from 'react-router-dom';
 
export function Card({data}:any){

  const {addCart} = useContext(ValueContext);

  const onButtonClick = (ProductInfo : ProductInfo) => {
    addCart(ProductInfo);
  };

  return (
    <ExternDiv>
      {
        data?.map((item:any) => (
          <Container key={item.objectID} >
            <CentralizeItens>
              <Link to={`/product-description/${item.id}`}><img src={item.image} alt="test" /></Link>
            </CentralizeItens>
            <Link to={`/product-description/${item.id}`}><ProductTitle>{(item.title).length < 50 ? (item.title) : `${(item.title).slice(0, 30)}...`}</ProductTitle></Link>
            <ProductDescription>{(item.description).length < 50 ? (item.description) : `${(item.description).slice(0, 30)}...`}</ProductDescription>
            <ProductPrice>U$ {item.price}</ProductPrice>
            <CentralizeItens>
              <AddtoCar onClick={() => onButtonClick(item)}><p>Adicionar ao carrinho</p></AddtoCar>
            </CentralizeItens>
          </Container>
        ))
      }
    </ExternDiv>
  );
};