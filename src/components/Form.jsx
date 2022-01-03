import { useState } from "react"
import './Form.css';
export const Form=()=>{
const [form,setForm]=useState(null)

const handleChange=e=>{
    let {name,value}=e.target
    setForm({
        ...form,
        [name]:value
    })
}

const handleSubmit=(e)=>{
    e.preventDefault()
    let res=fetch('http://localhost:3001/recipe',{
        method:"POST",
        body:JSON.stringify(form),
        headers:{
            'Content-Type':'application/json'
        }
    }).then((res)=> res.json()).then((res)=>console.log(res))
   

}
    return <div id="recipeDiv">
 <form onSubmit={handleSubmit} id="recipeForm" action="">
        <input onChange={handleChange} name="title" type="text" placeholder="title" />
        <input onChange={handleChange} name="ingredients" type="text" placeholder="ingredients" />
        <input onChange={handleChange} name="time" type="number" placeholder="time to cook in min"/>
        <input onChange={handleChange} name="image" type="text" placeholder="image url"/>
        <textarea onChange={handleChange} name="ins" cols="30"  rows="10" placeholder="recipe instruction"></textarea>
        <input type="submit" value="submit" />
    </form>
    </div>
    
   
}