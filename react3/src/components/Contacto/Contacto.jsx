import './Contacto.css';

const Contacto = () => {
 

    return (
<div className='consultaContainer'>      
    <div id='contacto' className='contactoContainer1'> 
    
            <div  className='consulta'>
                <h1>Envianos tu consulta</h1>
                <p>Completá tus datos y comentarios, te responderemos a la brevedad</p>
            </div>
            
            <div className='formulario'>

                        
                                <div className='contenedorinbox' >
                                    <div className='anchoInput1'>
                                        <input className='inputForm' type="text" name="nombre" placeholder=' '  />
                                        <label className='textoForm' for="nombre">Nombre y Apellido</label>
                                        <span className='line'></span>    
                                    </div>
                                </div>

                            
                                <div className='contenedorinbox' >
                                    <div className='anchoInput2'>      
                                        <input className='inputForm' type="text" name="email"  placeholder='' />
                                        <label className='textoForm' for="email" >Email</label>
                                        <span className='line'></span>    
                                    </div>
                                </div>

                                <div className='contenedorinbox' >
                                    <div className='anchoInput3'>
                                        <input className='inputForm' type="text" name="Telefono"  placeholder='' />
                                        <label className='textoForm' for="telefono" >Telefono</label>
                                        <span className='line'></span>    
                                    </div>
                                </div>

                                <div className='contenedorinbox' >
                                    <div className='motivo'>
                                        <select name="motivo" id="motivo" class='form-select' aria-invalid='false'>
                                            <option value="0">Motivo </option>
                                            <option value="1">Motivo 2</option>
                                            <option value="2">Motivo 3</option>
                                            <option value="3">Motivo 4</option>
                                        </select>
                                        <span className='line'></span>    
                                    </div>
                                </div>
                                
                                <div className='contenedorinbox' >
                                    <textarea className='mensaje' name="" id="" placeholder=''  rows="10"></textarea>
                                    <label className='textoForm' for="nombre" >Mensaje</label>
                                    <span className='lineTextBox'></span>    
                                </div>


                                <div >
                                    <input type="submit" className='boton' value="Enviar" />
                                </div>    

            </div>
     
     </div>
       
    
</div> 
        
    )
} 

export default Contacto