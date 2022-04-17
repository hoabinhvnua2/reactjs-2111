import React from "react";
import "./App.scss";
import Product from "./components/Product";
import Random from './components/Random';
import Count from './components/Count';
import { ProviderCustom } from './context';

export default function App() {
  return (
    <div className="App">
      {/* <Random /> */}
      <ProviderCustom>
        <Count />
      </ProviderCustom>
    </div>
  );
}
