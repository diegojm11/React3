import { memo } from 'react'
import{ Link } from 'react-router-dom' 
import './Item.css'
const Item = memo(

    ({product}) => {
        return(
           
            <div style={{margin:20}} className='col-md-3'key={product.id}>
    
                <div className="cardContainerr">
    
                        <Link className='linkcont' to={`/detail/${product.id}`}>
                           
                            <div className='cardDetalle'>
                                <div className="cardImg">
                                        <img src={product.foto} alt='' />
                                 </div>
                                <div className="cardTitulo">
                                    {`${product.name}`}
                                    
                                </div>
                                <div className='cardCategoria' > {`${product.categoria}`}</div>
                                <div className="cardPrecio">                                
                                ${product.price} USD
                                        
                                </div>
                            </div>
                        </Link>
                </div>
    
    
            </div>
       
        )
    }
    
)

export default Item