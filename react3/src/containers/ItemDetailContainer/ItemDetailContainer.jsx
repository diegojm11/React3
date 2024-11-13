import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../helpers/gFetch"

import ItemDetail from "../../components/ItemDetail/ItemDetail"
import Loading from "../../components/Loading/Loading"
import { doc, getDoc, getFirestore } from "firebase/firestore"


// funcioón 

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const [ loading, setLoading ] = useState(true)

    const { productId } = useParams()
    // console.log(productId)

    useEffect(()=>{        
        const db = getFirestore()
        const queryDoc = doc(db, 'productos',  productId)
        getDoc(queryDoc)
        .then(resp => setProduct( { id: resp.id,...resp.data()} ))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])     

    return (
        <>
            {loading ? <Loading /> : <ItemDetail product={product}/>}
            
            {/* <TextComponent7/> */}

        </>
    )
}

export default ItemDetailContainer