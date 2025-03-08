import { useState } from "react"

function Input({type, value, onChange, name}){

    return(
        <input 
        className="lg:w-48 md:w-38 w-47.5 bg-white p-1 border-1 border-gray-400 rounded-md focus:outline-none"
        type={type}
        name={name}
        value={value}
        onChange={onChange}>
        </input>
    )
}

export default Input