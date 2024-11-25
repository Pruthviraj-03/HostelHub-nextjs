"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import store from "../redux/store.js";
import client from "./lib/apolloClient.js";
import Header from "./ui/Header.jsx";
import Hero from "./ui/Hero.jsx";
import LocationList from "./ui/LocationList.jsx";
import Footer from "./ui/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <Header />
          <Hero />
          <LocationList />
          <Footer />
        </ApolloProvider>
      </Provider>
    </div>
  );
};

export default Home;
