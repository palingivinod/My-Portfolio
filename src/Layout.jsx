import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
  
    </>
  )
}

export default Layout