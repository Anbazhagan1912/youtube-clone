import React from "react";
import style from "./Sidebar.module.css"
import { Home, LibraryAdd } from "@mui/icons-material";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistorySharpIcon from '@mui/icons-material/HistorySharp';
import SlidItem from "../Slid-item/SlidItem";
const Sidebar = ()=>{
    return(
        <div className={style.container}>
             <SlidItem selected="yes" className={'item'} icon={<Home className="icon"></Home>} val="Home"></SlidItem> 
             <SlidItem className={'item'} icon={<OndemandVideoIcon className="icon"></OndemandVideoIcon>} val="Shorts"></SlidItem> 
             <SlidItem className={'item'} icon={<SubscriptionsIcon className="icon"></SubscriptionsIcon>} val="Subscription"></SlidItem> 
            <hr></hr>
            <p className={style.explore}>Explore</p>
             <SlidItem className={'item'} icon={<LibraryAdd className="icon"></LibraryAdd>} val="Library"></SlidItem> 
             <SlidItem className={'item'} icon={<HistorySharpIcon className="icon"></HistorySharpIcon>} val="History"></SlidItem> 
             <SlidItem className={'item'} icon={<VideoLibraryIcon className="icon"></VideoLibraryIcon>} val="Your videos"></SlidItem> 
             <SlidItem className={'item'} icon={<WatchLaterIcon className="icon"></WatchLaterIcon>} val="Watch Later"></SlidItem> 
             <SlidItem className={'item'} icon={<ThumbUpIcon className="icon"></ThumbUpIcon>} val="Liked videos"></SlidItem> 

             <hr></hr>
             <SlidItem className={'item'} icon={<LocalFireDepartmentIcon className="icon"></LocalFireDepartmentIcon>} val="Trending"></SlidItem> 
             <SlidItem className={'item'} icon={<MusicNoteIcon className="icon"></MusicNoteIcon>} val="Music"></SlidItem> 
             <SlidItem className={'item'} icon={<LiveTvIcon className="icon"></LiveTvIcon>} val="Flims"></SlidItem> 
             <SlidItem className={'item'} icon={<LiveTvIcon className="icon"></LiveTvIcon>} val="Live"></SlidItem> 
             <SlidItem className={'item'} icon={<SportsEsportsIcon className="icon"></SportsEsportsIcon>} val="Gaming"></SlidItem> 
             <SlidItem className={'item'} icon={<NewspaperIcon className="icon"></NewspaperIcon>} val="News"></SlidItem> 
             <SlidItem className={'item'} icon={<SchoolIcon className="icon"></SchoolIcon>} val="Learning"></SlidItem> 
            <hr></hr>
            <SlidItem className={'item'} icon={<SettingsIcon className="icon"></SettingsIcon>} val="Settings"></SlidItem> 
            <SlidItem className={'item'} icon={<FlagIcon className="icon"></FlagIcon>} val="Report history"></SlidItem> 
            <SlidItem className={'item'} icon={<HelpOutlineIcon className="icon"></HelpOutlineIcon>} val="Help"></SlidItem> 
            <SlidItem className={'item'} icon={<FeedbackIcon className="icon"></FeedbackIcon>} val="Send feedback"></SlidItem> 



        </div>
    )
}

export default Sidebar;