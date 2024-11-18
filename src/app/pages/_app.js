import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../../redux/store.js";
import client from "../lib/apolloClient.js";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
