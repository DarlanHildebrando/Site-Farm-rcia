
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>



    <Header/>

    <br />

     <Outlet/>
   


    <Footer/>
 
    </>
  )
}

export default App
