import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'
import ItemCount from "../../components/ItemCount/ItemCount"
import trash from '../../assets/trash.svg'
import { db } from "../../firestore/config"

const CartContainer = () => {
  const [ dataForm, setFormData ] =  useState({
    name: '',
    email: '',
    phone: ''
  })

  
  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } = useCartContext()
  console.log(cartList)


  const addOrder = (e) => {
    e.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.price = precioTotal()
    order.items = cartList.map( ( { id, price, name } ) => ( {id, price, name} ) )
    
    const queryCollection = collection(db, 'orders')

    // muchas ordenes 

    // productos.forEach(async prod => {
    //   await addDoc()
    // });

    // aca va la validacion si esta vacio if(formData)       +++++++++++++++++++++++++++++++++

    addDoc(queryCollection, order)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())


    // update 
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   stock: 100
    // })

    // borrado lógico
    // const queryDoc = doc(db, 'productos', 'LZgs8H5DuqMOdTwQKxRp')
    // updateDoc(queryDoc, {
    //   isActive: false
    // })


    console.log('se actualizo')
  }

  const handleOnChange = (e) => {
    // console.log('npmbre del input: ',e.target.name)
    // console.log('valor del input',e.target.value)
    setFormData( {
      ...dataForm,
      [e.target.name]: e.target.value
    } )
  }
  console.log(dataForm)

  return (
    <div className="carritoCont">
      { cartList.length !== 0 ? 
      <div className="carritoCont1">
        <div className="carritoTitulo">
        <h3>Producto</h3>
        <h4>Subtotal</h4>
        </div>
        {cartList.map(prod => <div className="carritoProductos" key={prod.id}>
                                      <div className="carritoProductoCont">   
                                              <div className="carritoFoto">
                                                  <img src={prod.foto} alt=""/> 
                                              </div>
                                              <div className="detalleProdCart">
                                                <p>{prod.name}</p>
                                                <p> Categoria: {prod.categoria}</p>
                                              </div>
                                      </div>
                                      <div className="preciobox"> 
                                         <p> Precio: ${prod.price} </p>
                                        <button onClick={() => eliminarPorItem(prod.id)}> <img src={trash} /> </button>
                                      </div>
                              </div>
                                ) 
          }
        <div className="totalbox" >
          <h4>Total:</h4>
          <h4>${ precioTotal() } </h4>
          </div>

        <form className="formCont" onSubmit={addOrder} >
                               
                          

                     <button className="btnIniciarCompra" >Iniciar Compra</button>
                              
        </form>

                              
                              
                          
      </div>
      
      : 
        <div className="carritoVacio">
              <h2>Carrito vacio</h2>
            <Link to= '/' > Ir home </Link>
        </div>
}
    </div>
  )
}

export default CartContainer