import React from "react";
import style from "./Recent.module.css"
import Video from "../../Recommandvideo/Video/Video";
import img1 from "../../../assets/xxxten.jpg"
import img2 from "../../../assets/xxxtentaction.jpg"

const Recent = ()=>{
    return(
        <div className={style.container}>
            <h1 className={style.video}>Videos</h1>
            <div className={style.video_conatainer}>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img1}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img2}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img1}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img2}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img2}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img2}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img2}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img1}></Video>

            </div>
        </div>
    )
}

export default Recent