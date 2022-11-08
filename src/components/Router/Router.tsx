import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes } from "../../pages/index";
import { PrincipalPage } from "../../pages/PrincipalPage";
import { CartPage } from "../../pages/CartPage";
import { ProductDescriptionPage } from "../../pages/ProductDescriptionPage";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.home} element={ <PrincipalPage/> }/>
      <Route path={PagesRoutes.CartPage} element={ <CartPage/> }/>
      <Route path={PagesRoutes.ProductDescriptionPage} element={ <ProductDescriptionPage/> }/>
    </Routes>
  </BrowserRouter>
);