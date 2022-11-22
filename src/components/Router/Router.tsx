import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PagesRoutes } from "../../pages/index";
import { PrincipalPage } from "../../pages/PrincipalPage";
import { CartPage } from "../../pages/CartPage";
import { ProductDescriptionPage } from "../../pages/ProductDescriptionPage";
import { LoginPage } from "../../pages/LoginPage";
import { Registration } from "../../pages/Registration";

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PagesRoutes.home} element={ <PrincipalPage/> }/>
      <Route path={PagesRoutes.CartPage} element={ <CartPage/> }/>
      <Route path={PagesRoutes.ProductDescriptionPage} element={ <ProductDescriptionPage/> }/>
      <Route path={PagesRoutes.LoginPage} element={ <LoginPage/> }/>
      <Route path={PagesRoutes.Registration} element={ <Registration/> }/>
    </Routes>
  </BrowserRouter>
);