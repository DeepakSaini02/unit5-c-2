import { useEffect, useState } from "react"
import './Show.css';
export const Show=({el})=>{
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
              <div id="inside" onClick={()=>el}>
                  <label>{el.title}</label>
                  <label>{el.time}</label>

              </div>
          ))
      }

    </div>
}