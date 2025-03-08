import { useState } from "react"
import Input from './Input.jsx';

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    return(
        <form>
            <div className="lg:w-4xl md:flex-row min-w-30 flex flex-col justify-center items-center gap-4">
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
            </div>
        </form>
    )
}

export default Form