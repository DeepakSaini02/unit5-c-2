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

function recipeDetails(el){
    console.log('h')

 return <div>
<Details title={el.title} />
 </div>

    
}


console.log(list)
    return <div id="showRecipe">

      {
          list.map((el)=>(
              <div id="inside" onClick={()=><Details title={el.title} />}>
                  <label>{el.title}</label>
                  <label>{el.time}</label>

              </div>
          ))
      }

    </div>
}