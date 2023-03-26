import React from "react";
import img from "../../assets/xxxtentaction.jpg"
import Show from "./Show/Show";
import Recent from "./Recent/Recent";
import style from "./Channel.module.css"
const Channel =()=>{
    return(
        <div className={style.container}>
           <div className={style.banner}>

           </div>
           <div className={style.channel}>
            <div className={style.name}>
                <img className={style.img} src={img}></img>
                <div className={style.title_container}>
                <div className={style.title}>
                    <p className={style.channel_name}>XXXTENTACTION</p>
                    <p className={style.des}>@xxxtentacion</p>
                    <p className={style.sub}>10M subscribers</p>
                </div>
                <div className="sub_container">
                    <button>subscribe</button>
                </div>
                </div>
               

            </div>
            <div className={style.content}>
                <ul>
                    <li>Home</li>
                    <li>Video</li>
                    <li>Shorts</li>
                    <li>Live</li>
                    <li>PlayList</li>
                    <li>Community</li>
                    <li>Channel</li>
                    <li>About</li>

                </ul>
            </div>
           </div>
       
           <Show></Show>
           <Recent></Recent>
           
        </div>


    )
}

export default Channel