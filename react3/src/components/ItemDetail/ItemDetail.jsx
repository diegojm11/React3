import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    const [isCant, setIsCant] = useState(false)

    const { agregarCarrito} = useCartContext()

    const onAdd = (cant) => {
        console.log('la cantidad seleccionada es: ',cant)
        agregarCarrito({...product, cant})
        setIsCant(true)
    }
    return (
        <div className='DetalleProductoContainer'>
            <div className='DetalleProductoContainer2'>
                <div className='productoImg'>
                    
                    <h4 className='CategoriaDetalle'>Categoria: {product.categoria}</h4>
                    <img src={product.foto} alt='foto producto' />
                </div>
              
              
                <div className='DetalleProducto' >   
                    <div className='DetalleProducto2' >
                        <h3 className='tituloDetalle' >{product.name}</h3>
                        <h3 className='PrecioDetalle'>${product.price}</h3>
                        <h4 className='StockDetalle'>Stock: {product.stock} </h4>
                        <h4 className='StockDetalle'>Ver medios de pago</h4>
                    </div>
                    <div className="AgregarCarrito">
                        {isCant ?

                            <>
                                <Link to="/cart">
                                    <button className='btn btn-outline-primary'>Ir al carrito</button>

                                </Link>
                                <Link to="/">
                                    <button className='btn btn-outline-success'>Seguir comprando </button>
                                </Link>
                            </>
                        
                        :
                        
                        <ItemCount 
                            stock={product.stock} 
                            initial={1} 
                            onAdd={onAdd} 
                        />
                        }
                    </div>
                </div>
                
            </div>
            <div className='descripcion'>
                <h1>descripcion del producto</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, libero tempora quam inventore magni, quis, iusto minus voluptatibus corrupti omnis dolor quia accusantium cupiditate odio facilis tempore facere consectetur labore.</p>
            </div>
        </div>
)
    
}
export default ItemDetail