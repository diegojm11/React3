import './ProductosHome.css'
import auris from '../../assets/Img/auris.jpg'
import mic from '../../assets/Img/mic.jpg'
import monitores from '../../assets/Img/monitores.jpg'
import subwoofer from '../../assets/Img/subwoofer.jpg'
import hometh from '../../assets/Img/hometh.jpg'
import { Link } from 'react-router-dom'


const ProductosHome = () => {
    return (
        <div className='productoshomecontainer'>
            <div className='productosHome'>
            <div className='ph1cont'><Link to="/category/auriculares"><div className='ph1'><h1>Auriculares</h1><img src={auris} alt="" /></div></Link></div>
            <div className='ph1cont'><Link to="/category/microfonos"><div className='ph2'><h1>Microfonos</h1><img src={mic} alt="" /></div></Link></div>
            </div>
            <div className='productosHome2'>
                <div className='ph3'><img src={subwoofer} alt="" /></div>
                <div className='ph4'><img src={monitores} alt="" /></div>
                <div className='ph5'><img src={hometh} alt="" /></div>
            </div>
        </div>
        )

}

export default ProductosHome