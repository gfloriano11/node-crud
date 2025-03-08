import { useState } from "react"
import Input from './Input.jsx';

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    return(
        <form>
            <div className="bg-gray-100 md:flex-row md:items-end 
            min-w-30 flex flex-col justify-center items-center 
            md:gap-3.5 gap-1.5 border-gray-400 border-2 rounded-2xl pt-2 p-4 shadow-2xl shadow-gray-400">
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label>Name:</label>
                    <Input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label>E-mail:</label>
                    <Input type="e-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label>Phone Number:</label>
                    <Input type="text" value={number} onChange={(event) => setNumber(event.target.value)}/>
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label>Birthdate:</label>
                    <Input className="lg:w-48 md:w-38 w-47.5 bg-white p-1 border-1 border-gray-400 rounded-md focus:outline-none"
                     type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>
                <div className="w-full md:flex md:align-bottom">
                    <button className="md:w-20 md:h-8.5 w-full flex flex-col justify-center items-center bg-blue-500 p-2 rounded-lg cursor-pointer">
                        <p className="text-white font-inter">Criar</p>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form