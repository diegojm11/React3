import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock=10, initial=1, onAdd}) => {
    const [ count, setCount] = useState(initial)
    
    const restar = () => {
        if (count > initial) {
            setCount(count-1)            
        }
    }
    const sumar = () => {
        if ( count< stock) {
            setCount(count+1)            
        }
    }

    const handleOnAdd = () => {
        onAdd(count)

        
    }
    
    return (
       <div className="AgregaralCarritoContainer"> 
            <div className="AgregaralCarrito-header">
                <h3>CANTIDAD</h3>
                <label htmlFor="">{count}</label>
            </div>
            <div className="AgregaralCarrito-body">
                <button onClick={sumar}  className="btn btn-outline-primary"> + </button>
                <button  onClick={restar} className="btn btn-outline-primary"> - </button>
            </div>
            <div className="AgregaralCarrito-boton">
                <button className="buttonAgregarCarrito" onClick={ handleOnAdd }> <h2>AGREGAR AL CARRITO</h2> </button>
            </div>
       </div> 
    )
}

export default ItemCount