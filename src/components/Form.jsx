import { useState } from "react"

export const Form=()=>{
const [form,setForm]=useState(null)

const handleChange=e=>{
    let {name,value}=e.target
    setForm({
        ...form,
        [name]:value
    })
}

    return <form  action="">
        <input onChange={handleChange} name="title" type="text" placeholder="title" />
        <input onChange={handleChange} name="ingredients" type="text" placeholder="ingredients" />
        <input onChange={handleChange} name="time" type="number" placeholder="time to cook in min"/>
        <input onChange={handleChange} name="image" type="text" placeholder="image url"/>
        <input type="submit" value="submit" />
    </form>
}