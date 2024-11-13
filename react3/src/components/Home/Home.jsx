import './Home.css'
import Carousel1 from "../Carousel/Carousel1"
import ProductosHome from '../ProductosHome/ProductosHome'
import BannerCuotas from '../Bannercuotas/bannercuotas'
import Titulo from '../Titulo/titulo'
import ItemListContainer from '../../containers/ItemListContainer/ItemListContainer'
import Footer from '../Footer/footer'

const Home = () => {
return(
  <div className="home"> 
    <Carousel1/>
    <Titulo/>
    <ProductosHome/>
    <BannerCuotas/>
    <ItemListContainer/>
    
  </div>
    )
  }

export default Home
