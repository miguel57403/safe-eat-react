import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Store } from "./app/store";
import "./assets/style.css";
import reportWebVitals from "./reportWebVitals";
import { RoutesApp } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#722ed1",
            },
          }}
        >
          <RoutesApp />
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
