import { useState } from "react"

function Input(props){

    return(
        <input 
        className="lg:w-48 md:w-38 w-20 bg-white p-1 border-1 border-gray-400 rounded-md focus:outline-none"
        {...props}>
        </input>
    )
}

export default Input