import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Erro from './Routes/Erro.jsx'
import PágSaibaMais from './Routes/PágSaibaMais.jsx'
import Home from './Routes/Home.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Routes = createBrowserRouter([
{
path: '/',
element: <App/>,
elementError: <Erro/>,
children: [

{

  path: '/',
  element: <Home/>


},

{

  path: 'SaibaMais',
  element: <PágSaibaMais/>
  

},


]
},

])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>,
)
