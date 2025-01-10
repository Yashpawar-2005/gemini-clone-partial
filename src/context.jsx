import { useContext,createContext, useState, Children } from "react";
import React from 'react'
import run from "./config/api.js";
export const refcontext=createContext();
const Context=(props)=> {
    const [loadi,setloadi]=useState("this is load i")
    const[currenti,setcurrenti]=useState("")
    const[previ,setprevi]=useState([])
    const[loading,setloading]=useState(false)
    const[result,setresult]=useState([])
    const[showresult,setshowresult]=useState(false)

    const onto= async(prompt)=>{
       setresult("")
        setloading(true)
        setcurrenti(loadi)
        setshowresult(true)
        const temp_result=await run(loadi);
        console.log(temp_result)
        let arr=temp_result.split("**");
      // for (let index = 0; index < 2*(arr.length); index++) {
        
        
      // }
      let string=arr.join(" ")
      arr=string.split("*")
      string=arr.join(" ")
      // arr=string.split(" ")

      // console.log(string)
      
        setresult(arr);
        setloading(false);
        setloadi("")
    }
    // onto("what is react js")
    const imp={onto,
        loadi,
        setcurrenti,
        setloadi,
        setloading,setprevi,currenti,previ,loading,result,setresult,setshowresult,
        showresult
    }
  return (
    <refcontext.Provider value={imp}>
        {props.children}
    </refcontext.Provider>
    
  )
}

export default Context