import { memo } from 'react'
import Item from '../Item/Item'
import './ItemList.css'
// memo(componente, funcion comparadora)


const ItemList = memo( ({ products }) => {
        console.log('itemList')
        
        return (
            <div className='itemlist0'>

            <div className='itemlist'>
                

                {products.map( product =>   <Item key={product.id} product={product} />)}
                
            </div>
            </div>
        )
    }
 ) 

export default ItemList