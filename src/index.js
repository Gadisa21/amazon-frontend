import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./Component/reducer";
import { StateProvider } from "./Component/StateProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}> <App /></StateProvider>
   
  </StrictMode>
);

