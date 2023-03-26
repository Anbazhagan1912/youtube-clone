import React from "react";
import style from "./Show.module.css"
import img from "../../../assets/xxxtentaction.jpg"

const Show =(props)=>{
    return(
        <div className={style.container}>
 

           <img className={style.img} src={img}></img>
           <div className={style.des}>
                <p className={style.head}>Jahseh Dwayne Ricardo Onfro</p>
                <p className={style.sub}>10M  2 years ago</p>
                <p className={style.about}>Born in Plantation, Florida, XXXTentacion spent most of his childhood in Lauderhill. He began writing music after being released from a juvenile detention center and soon started his music career on SoundCloud in 2013, employing styles and techniques that were unconventional in rap music. </p>
           </div>
        </div>
     
    )
}

export default Show