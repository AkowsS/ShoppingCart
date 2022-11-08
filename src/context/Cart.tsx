import React, { useState } from 'react';

interface ValueContextprops{
  removeItem: (id: number) => void;
  priceCart: () => string;
  Cartquantity: ()=> number;
  decrementCart: (id: number) => void;
  cart: ProductCart[];
  product: ProductInfo[];
  addCart: (product : ProductInfo) => void;
  incrementCart: (id: number) => void;
  searchitems: (id: number) => ProductInfo;
};

export interface ProductInfo {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  };
};

export interface ProductCart {
  count: number;
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
  rating?: {
    count: number;
    rate: number;
  };
};

interface ValueChildrenProps {
  children: React.ReactNode;
};

export const ValueContext = React.createContext({} as ValueContextprops);

export const ValueProvider: React.FC <ValueChildrenProps> = ({ children }) => {
  const[product,setProduct] = useState<ProductInfo[]>([]);
  const[cart,setCart] = useState<ProductCart[]>([]);

    const url = "https://fakestoreapi.com/products/";
    
    fetch(url)
    .then((response) => response.json())
    .then((product) => setProduct(product));

  const addCart = (product : ProductInfo) => {
    const newList = [...cart];
    const inCart = newList.some(item => item.id === product.id);
    if(inCart){
      incrementCart(product.id);
    }else{
      newList.push({...product , count:1});
      setCart(newList);
    };
  };

  const Cartquantity = () => {
    return cart.reduce((total,product) => total + product.count, 0);
  };

  const searchitems = (id: number) => product?.filter((item) => (item.id === id))[0];
  
  const decrementCart = (id: number) => {
    const newList = cart.map(product => {
      if( product.id === id && product.count > 1 ){
        product.count -= 1;
      };
      return product;
    });
    setCart(newList);
  };

  const incrementCart = (id: number) => {
    const newList = cart.map(product => {
      if( product.id === id ){
        product.count += 1;
      };
      return product;
    });
    setCart(newList);
  };

  const priceCart = () => {
    return cart.reduce((total,product) => total +(product.count * product.price), 0).toFixed(2);
  };

  const removeItem = (id: number) =>  setCart(cart?.filter((item) => (item.id !== id)));

  return (
    <ValueContext.Provider value={{
      removeItem,
      priceCart,
      addCart,
      Cartquantity,
      decrementCart,
      incrementCart,
      cart,
      product,
      searchitems,
    }}>
      {children}
    </ValueContext.Provider>
  );
};