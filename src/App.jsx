import { useState } from 'react'
import './App.css'
import GlobalStyle from './global-styles'
import { Layout } from "antd";
import { BrowserRouter } from "react-router";
import RenderRouter from "./routes";

function App() {
  return (
    <>
    <GlobalStyle />
    <Layout>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </Layout>
    </>
  )
}

export default App
