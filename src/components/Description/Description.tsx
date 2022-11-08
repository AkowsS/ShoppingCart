import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductInfo, ValueContext } from "../../context/Cart";
import{AddtoCar, CentralizeItens, Container, ExternDiv, ItemDescription, ItemTitle, ProductPrice, TextInformations} from "./Description.styles";


export function Description({data}:any){
  const [product, setProduct] = React.useState<ProductInfo>(
    {} as ProductInfo,
  );
  const { searchitems,addCart } = React.useContext(ValueContext);
  const location = useLocation();
  const onButtonClick = (ProductInfo : ProductInfo) => {
    addCart(ProductInfo);
  };

  useEffect(() => {
    const id = location.pathname.split("/").reverse()[0];
    setProduct(searchitems(Number(id)));
  },[]);
  
  return (
    <Container >
      <ExternDiv>
        <img src={product?.image} alt="Product" />
        <TextInformations>
            <ItemTitle>{product?.title}<br/></ItemTitle>
            <ItemDescription>{product?.description}</ItemDescription>
             <ProductPrice><p>Value:</p>U$ {product?.price}</ProductPrice>
        </TextInformations>
      </ExternDiv>
        <CentralizeItens>
            <AddtoCar onClick={() => onButtonClick(product)}><p>Adicionar ao carrinho</p></AddtoCar>
        </CentralizeItens>
    </Container>
  );
};

