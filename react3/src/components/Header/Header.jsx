import './Header.css'
import Logo from '../../assets/Img/logoaudioluxe..png';
import { Link, NavLink } from 'react-router-dom'
import { Cartwidget } from '../Cartwidget/Cartwidget';
import  { AiOutlineSearch } from 'react-icons/ai'
import { Buscador } from '../Buscador/Buscador';
import { useEffect, useState } from 'react';

const Header =() => {

    const [bannerScrolled, setBannerScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          setBannerScrolled(true);
        } else {
          setBannerScrolled(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    return (
      
        <div  className={`header0 ${bannerScrolled ? 'achicarImg' : ''}`}>
                <div className="header"> 
                      <div className='header1'>
                            <div> <Buscador/> </div>
                        
                            <div  className={`logo ${bannerScrolled ? 'logoachicar' : ''}`}> 
                                <a href="" to="/" >          
                                    <img  src={Logo} alt="Logo" />
                                </a>
                            </div>

                            <div> <Link className='carrito' to="/cart "> < Cartwidget /> </Link></div>
                        </div>

                        
                </div>

                 <ul className='menu'>
                    <li><Link to="/home"><a href=""> HOME</a></Link></li>
                    <li><Link to="/productos"> <a href=""> PRODUCTOS</a></Link>
                       
                        <ul className='submenu'>
                            <li><Link to="/category/subwoofer">Sub woofer</Link></li>
                            <li><Link to="/category/monitores de estudio">Monitores de Estudio</Link></li>
                            <li><Link to="/category/home theater">Home Theater</Link></li>
                            <li><Link to="/category/microfonos">Microfonos</Link></li>
                            <li><Link to="/category/auriculares">Auriculares</Link></li>
                        </ul>
                        
                    </li>                    
                    <li><Link to="/contacto"> <a href=""> CONTACTO</a></Link></li>
                    <li><Link to="/dondeEstamos"> <a href=""> DONDE ESTAMOS</a></Link></li>
                </ul>

    </div>

       
        

    )
}

export default Header