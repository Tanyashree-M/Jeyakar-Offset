import React from "react";
import { Header } from "./components/header"
import { Infra } from "./components/infra";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Products } from "./components/products";
import { Contact } from "./components/contact";
import { Layout } from "./components/layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      <Route
        index
        element={<Header />}
      />

      <Route
        path="about us"
        element={<About />}
      />

      <Route
        path="services"
        element={<Services />}
      />

      <Route
        path="infra"
        element={<Infra />}
      />

      <Route
        path="products"
        element={<Products />}
      />

      <Route
        path="contact"
        element={<Contact />}
      />

    </Route>
  )
);


const App = () => {

  return (
    <RouterProvider router={router} />
  )

}

export default App;
