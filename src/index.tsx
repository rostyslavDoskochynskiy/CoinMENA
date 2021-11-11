import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import App from "./App";

import store from "./store";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App/>
      </BrowserRouter>
    </Provider>
  </QueryClientProvider>,
  document.getElementById("root")
);
