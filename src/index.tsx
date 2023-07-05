import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./assets/style.css";
import reportWebVitals from "./reportWebVitals";
import { RoutesApp } from "./routes/routes";
import { Store } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <RoutesApp />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
