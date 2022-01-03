import { useEffect, useState } from "react"
import { Details } from "./Details";
import './Show.css';
export const Show=({})=>{
const [list,setList]=useState([])
useEffect(()=>{
    getList()
},[])

const getList=()=>{
    fetch('http://localhost:3001/recipe').then((d)=> d.json()).then((res)=>{setList(res)})
}




console.log(list)
    return <div id="showRecipe">

      {
          list.map((el)=>(
            

<Details title={el.title}
    //           <div id="inside" onClick={()=> />}>
    //               <label>{el.title}</label>
    //               <label>{el.time}</label>

    //           </div>
    //       ))
    //   }

    // </div>
}