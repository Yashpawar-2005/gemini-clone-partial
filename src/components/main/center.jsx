import React, { useContext } from 'react'
import { assets } from '../../assets/assets/assets'
import './center.css'
import { refcontext } from '../../context'
// import { TypeAnimation,Typing} from 'react-type-animation'


function Center() {
  const{loadi,onto,
    setcurrenti,
    setloadi,
    setloading,setprevi,currenti,previ,loading,result,setresult,setshowresult,
    showresult} =useContext(refcontext)
  return (
    <div className='y'>
    <nav className='nav'>
        <img src={assets.user_icon} alt="this is image here"  className='omg'/>
        <div className='om'>Gemini</div>
        </nav>
        {!showresult? <div className="box">
          <div className="twotext">
          <div className="ftext">this is main text</div>
          <div className="stext">this is second text</div>
            </div>
            <div className="cards">
                <div className="card">
                  <div className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut labore corrupti.</div>
                  <img src={assets.compass_icon} alt=""  height="30px"/>
                </div>
                <div className="card">
                  <div className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut labore corrupti.</div>
                  <img src={assets.compass_icon} alt=""  height="30px"/>
                </div>
                <div className="card">
                  <div className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut labore corrupti.</div>
                  <img src={assets.compass_icon} alt=""  height="30px"/>
                </div>
                <div className="card">
                  <div className="data">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum aut labore corrupti.</div>
                  <img src={assets.compass_icon} alt=""  height="30px"/>
                </div>
              </div>
            <div className="search">
              <input type="text"  placeholder='enter the prompt here' onChange={(e)=>setloadi(e.target.value)} value={loadi} className='inp'/>
            
              <div>
              <img src={assets.mic_icon} alt=""  height="40px"/>
              <img src={assets.gemini_icon} alt=""  height="40px" onClick={()=>onto()}/>
              </div>

            </div>
            </div>:<div className='box '>
              <div className="second">

              <div className="work ">

              <div className="quest"><img src={assets.user_icon} alt=""  className='qi'/>
              </div>
              <div className="que">{currenti}</div>
              </div>
              <img src={assets.gemini_icon} alt=""  className='qi' />
              {!loading?<div className='output'>{result}</div>:
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div> }
              
              </div>
              <div className="search">
              <input type="text"  placeholder='enter the prompt here' onChange={(e)=>setloadi(e.target.value)} value={loadi} className='inp'/>
            
              <div>
              <img src={assets.mic_icon} alt=""  height="40px"/>
              <img src={assets.gemini_icon} alt=""  height="40px" onClick={()=>onto()}/>
              </div>

            </div>
              </div>
              }
       
 </div>
  )
}
export default Center
