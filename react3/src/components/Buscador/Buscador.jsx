import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore,  query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import { Link } from "react-router-dom"
import './Buscador.css'
import Search from '../../assets/Img/search.svg'

export  const Buscador = () => {
    const [search, setSearch] = useState('')

    const changeSearch = e => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }
   


    return (
       <div>
       <div>
            <form className="form-input"  >
             <input className="inputBuscador" type="text" value={search} placeholder="Buscar" onChange={changeSearch} />
             <Link to={`/search/${search}`}><button className="botonBuscador" type="submit" > <img src= {Search} alt="" /> </button></Link>
            </form>

        </div>
          
            
        
         </div>
        
    )
}