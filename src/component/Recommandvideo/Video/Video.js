import React from "react";
import style from "./Video.module.css"
import { Avatar } from "@mui/material";
const Video = (props)=>{
    return(
        <div className={style.container}>
            <div className={style.card_details}>
                <img src={props.img} alt=""></img>
                <div className={style.content_container}>
                 <Avatar className={style.avatar} src={props.img} ></Avatar>
            <div className={style.description}>
                <p className={style.content}>{props.title}</p>
                <p className={style.channel}>{props.channel}</p>
                <div className={style.extra}>
                <p className={style.views}>10M</p>
                <p className={style.timestamp}>2 years ago</p>
                </div>
            </div>
            </div>
            </div>

        </div>
    )
}

export default Video