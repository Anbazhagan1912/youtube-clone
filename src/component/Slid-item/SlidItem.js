import React from "react";
import "./Sliditem.css"

const SlidItem = (props)=>{
    return(
        <div className='item' >
            {props.icon}
            <p>{props.val}</p>
        </div>
    )
}

export default SlidItem