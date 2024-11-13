import card from '../../assets/Img/card.svg'
import truck from '../../assets/Img/truck.svg'
import './bannercuotas.css'

const BannerCuotas =()=>
    {
    return(
        <div className='bannercuotas0'>

      
        <div className='bannercuotas'>
            <div>
                <img src={truck} alt="" />
                <div className='box1'><p>Entregas a todo el país</p></div>
            </div>
            
            <div>
                <img src={card} alt="" />
                <div className='box1'><p>35%OFF EN EFECTIVO / TRANSFERENCIA</p></div>
            </div>
            <div>
                <img src={card} alt="" />
                <div className='ultimobox'><p>Todas las tarjetas</p></div>
            </div>
        </div>
        </div>
    )
}

export default BannerCuotas