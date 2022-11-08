import { Router } from "../Router";
import React from "react";
import { ContantWrapper } from "./App.styles";
import { ValueProvider } from "../../context/Cart";

export const App: React.FC = () => (
  <ContantWrapper>
    <ValueProvider>
      <Router/>
    </ValueProvider>
  </ContantWrapper>
);