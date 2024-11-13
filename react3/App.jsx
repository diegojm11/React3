import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {  CartContextProvider } from './src/context/CartContext'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemListContainer from './src/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './src/containers/ItemDetailContainer/ItemDetailContainer'

import Home from './src/components/Home/Home'
import Header from './src/components/Header/Header'
import Contacto from './src/components/Contacto/Contacto';
import Footer from './src/components/Footer/footer';
import Mapa from './src/components/Mapa/mapa';
import CartContainer from './src/containers/CartContainer/CartContainer';

function App() { 
    
    let saludo = 'saludo' // estado
   


    return (
        <div className='master1'>
            <BrowserRouter>
                <CartContextProvider>
                   <Header/>
                    
                    <Routes >
                        <Route path='/' element={ <Home saludo={saludo}  /> } />
                        <Route path='/home' element={ <Home saludo={saludo}  /> } />
                        <Route path='/productos' element= {<ItemListContainer/>} />
                        
                        <Route path='/contacto' element= { <Contacto/> } />
                        <Route path='/dondeEstamos' element={ <Mapa/> } />
                        <Route path='/search/:searchId' element= {<ItemListContainer/>} />
                        
                        <Route path='/category/:id' element={ <ItemListContainer saludo={saludo}  /> } />
                        
                        <Route path='/detail/:productId' element={
                                // <TextComponent user={true} >
                                    <ItemDetailContainer /> 
                                // </TextComponent>
                            } />
                        <Route path='/cart' element={ <CartContainer/> } />
                     
                        <Route path='*' element={<Navigate to='/' />}/>
                    </Routes>       
                    <Footer/>
                </CartContextProvider>               
            </BrowserRouter>

        </div>
        
    )
}

export default App
