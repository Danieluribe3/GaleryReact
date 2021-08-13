import React from 'react'
import { Link } from "react-router-dom";
import Alien3 from '../imagenes/alien.jpg'
import Cora3 from '../imagenes/cora.jpg'
import Fenix3 from '../imagenes/fenix.jpg'
import Gato3 from '../imagenes/gato.jpg'
import Luces3 from '../imagenes/luces.jpg'
import Lupa3 from '../imagenes/lupa.jpg'

const Navegacion = () => {
    return (
        <div className="container mt-3 padre">
            <Link to ="/Alien" className="links">
               <figure>
                <img src ={Alien3}alt ="" className="tamaño-img"/>
                
                <figcaption>Alien</figcaption>
                </figure>
             
            </Link>


            <Link to ="/Cora"className="links">
               <figure>
                <img src = {Cora3} alt ="" className="tamaño-img"/>
                
                <figcaption>Cora</figcaption>
                </figure>
             
            </Link>

            <Link to ="/Fenix"className="links">
               <figure>
                <img src ={Fenix3} alt ="" className="tamaño-img"/>
                
                <figcaption>Fenix</figcaption>
                </figure>
             
            </Link>

            <Link to="/Gato"className="links">
               <figure>
                <img src ={Gato3} alt ="" className="tamaño-img"/>
                
                <figcaption>Gato</figcaption>
                </figure>
             
            </Link>

            <Link to ="/Luces"className="links">
               <figure>
                <img src ={Luces3} alt ="" className="tamaño-img"/>
                
                <figcaption>Luces</figcaption>
                </figure>
             
            </Link>

            <Link to ="/Lupa"className="links">
               <figure>
                <img src ={Lupa3} alt ="" className="tamaño-img"/>
                
                <figcaption>Lupa</figcaption>
                </figure>
             
            </Link> 

          
        </div>
    )
}

export default Navegacion
