import { useEffect, useState } from "react"

export const Show=()=>{
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
              <div>
                  <h3>{el.title}</h3>
                  <h5>{el.time}</h5>

              </div>
          ))
      }

    </div>
}