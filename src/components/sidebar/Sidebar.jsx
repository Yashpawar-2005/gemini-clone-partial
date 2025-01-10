import React, { useState } from 'react'
// import car from "../../assets"
import { assets } from '../../assets/assets/assets'
import "./sidebar.css"
const Sidebar=()=> {

    const [toggle,settoggle]=useState(false)
    return (
        <div className='sidebar'>
            <div className='topsidebar'>
                <img src={assets.menu_icon} alt=""  onClick={()=> {settoggle((prev)=>!prev);}}/>
                <div className="char">
                    <button className='newchat'><img src={assets.plus_icon} alt="" />
                        {toggle?<span>New Chat</span>:<div className='omm'></div> }</button>
                </div>
                <div className="recent">
                    {toggle?<div className="re">recent</div>:<div className='omm'></div>}
                    <div className="cent"><span><img src={assets.message_icon} alt=""  /></span>{toggle?<span >this is text</span>:<div className='om'></div>}</div>
                </div>
            </div>
            <div className="bottomsidebar">
                <div className="bottom">
                    <div className="home o">
                        <img src={assets.gallery_icon} alt=""  />
                        {toggle?<div>Help</div>:<div className='omm'></div>}
                    </div>
                    <div className="settings o">
                    <img src={assets.setting_icon} alt=""  />
                    {toggle?<div>Help</div>:<div className='omm'></div>}
                    </div>
                    <div className="help o">
                    <img src={assets.gallery_icon} alt=""  />
                    {toggle?<div>Help</div>:<div className='ommm'></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar