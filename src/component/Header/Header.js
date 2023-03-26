import React,{useState} from "react";
import { Menu } from "@mui/icons-material";
import style from "./Header.module.css"
import { Mic } from "@mui/icons-material";
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import { NotificationAddSharp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import img from "../../assets/youtube.png"
import bean from "../../assets/mrbean.jpeg"
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Header = ()=>{

    const [input,SetInput] = useState("")

 

    return(
        <div className={style.container}>
            <div className={style.icon_container}>
                 <Menu className={style.menu}></Menu>
                <img alt="no" src={img} ></img>

            </div>

            <div className={style.search_container}>
                <input onChange={(e)=>SetInput(e.target.value)} placeholder="Search" type="text" ></input>
                <Link   to={`/search/${input}`}>
                   <Search  className={style.search}></Search>

                </Link>
                <Mic className={style.mic}></Mic>
                

            </div>

            <div className={style.other_container}>
                <VideoCallSharpIcon className={style.vc}></VideoCallSharpIcon>
                <NotificationAddSharp className={style.vcs}></NotificationAddSharp>
                <Avatar className={style.av} src={bean}></Avatar>
            </div>
        </div>
    )
}

export default Header