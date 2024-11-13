import {useState, useEffect} from 'react'
import {  useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, where, or } from 'firebase/firestore'
import ItemList from '../../components/ItemList/ItemList'
import Loading from '../../components/Loading/Loading'
import { gFetch } from '../../helpers/gFetch'
import './itemlistcontainer.css'
import BannerCuotas from '../../components/Bannercuotas/bannercuotas'
;
import { db } from '../../firestore/config'

// acciones  api -> resultado (asincrónico)



const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { // componente 
    
   
    const [ products, setProducts ] = useState([])

    const [loading, setLoading] = useState(true)

    const { id, searchId } = useParams()

    console.log('itemListContainer')
    
    useEffect(()=>{
        const queryCollection = collection(db, 'productos')
        console.log(queryCollection)

        let categoriaQuery;
        let nombreQuery;

        if (id) { 

            const queryFiltrada =  query(queryCollection, where('categoria','==', id))

  
            getDocs(queryFiltrada)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
            
             
        } else if (searchId) {
           
            categoriaQuery = query(
                queryCollection,
                where('categoria', '>=', searchId),
                where('categoria', '<=', searchId + '\uf8ff')
                );
            nombreQuery = query(
                queryCollection,
                where('name', '>=', searchId),
                where('name', '<=', searchId + '\uf8ff')
                );
                    

         

            Promise.all([getDocs(categoriaQuery), getDocs(nombreQuery)])
            .then(([categoriaDocs, nombreDocs]) => {
              
                const categoriaProducts = categoriaDocs.docs.map((product) => ({ id: product.id, ...product.data() }));
                const nombreProducts = nombreDocs.docs.map((product) => ({ id: product.id, ...product.data() }));
              
              const allProducts = [...categoriaProducts, ...nombreProducts];
              
              setProducts(allProducts);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
            
        }    
         else {
           
            getDocs(queryCollection)
            .then(data => setProducts( data.docs.map(product => ({ id: product.id,...product.data()}) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))   
        }      
   

    }, [id, searchId])
  
    
    return (
        <div className='itemlistcontainer'>
            <div>
                
        
            {   loading ? 
                    <Loading /> 
                    :                   
                    <div>
                    <ItemList products={products} />
                    <BannerCuotas/>
                    </div>
                    
                    
                }            
                </div>
        
        </div>
    )
}

export default ItemListContainer
