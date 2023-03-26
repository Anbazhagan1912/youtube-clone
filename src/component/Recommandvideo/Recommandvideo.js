import React from "react";
import style from "./Recommand.module.css"
import Video from "./Video/Video";
import img1 from '../../assets/dbz.jpeg'
import img2 from "../../assets/tom.jpeg"
import img3 from "../../assets/xxxtentaction.jpg"
import img4 from "../../assets/mrbean.jpeg"
const Recommandvideo = ()=>{
    return(
        <div className={style.container}>
            <Video channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video channel="XXXTENTACTION" title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video channel=" Classic Mr Bean" title="Eat Out To Help Out with Mr Bean | Full Episodes | Classic Mr Bean" img={img4}></Video>
            <Video channel="Dragon Ball Z"title="Dragon Ball Z Entire Series Explained" img={img1}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video channel="Dragon Ball Z"title="Dragon Ball Z Entire Series Explained" img={img1}></Video>
            <Video channel=" Classic Mr Bean"  title="Eat Out To Help Out with Mr Bean | Full Episodes | Classic Mr Bean" img={img4}></Video>
            <Video channel="Dragon Ball Z"title="Dragon Ball Z Entire Series Explained" img={img1}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>
            <Video channel="XXXTENTACTION" title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video channel="Dragon Ball Z"title="Dragon Ball Z Entire Series Explained" img={img1}></Video>
            <Video channel="XXXTENTACTION" title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>
            <Video  channel="Tom and Jerry" title="Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids" img={img2}></Video>
            <Video channel="XXXTENTACTION" title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>
            <Video channel="XXXTENTACTION"  title="XXXTENTACION - MOONLIGHT (OFFICIAL MUSIC VIDEO)" img={img3}></Video>

            <Video channel=" Classic Mr Bean"  title="Eat Out To Help Out with Mr Bean | Full Episodes | Classic Mr Bean" img={img4}></Video>




        </div>
    )
}

export default Recommandvideo