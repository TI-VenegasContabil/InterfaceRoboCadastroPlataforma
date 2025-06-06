import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import CadastroEmpresa from './pages/CadastroEmpresa.jsx';
import CadastroSocio from './pages/CadastroSocio.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element = {<App/>}>
          <Route path ="/" element = {<Home/>}/>
          <Route path = "/cadastro_empresa" element = {<CadastroEmpresa/>}/>
          <Route path = "/cadatro_socio" element = {<CadastroSocio/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
