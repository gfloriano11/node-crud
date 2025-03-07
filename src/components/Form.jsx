import { useState } from "react"
import Input from './Input.jsx';

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    return(
        <form>
            <div className="lg:w-4xl flex justify-center">
                <div className="flex flex-col">
                    <label>Name:</label>
                    <Input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label>E-mail:</label>
                    <Input type="e-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label>Phone Number:</label>
                    <Input type="text" value={number} onChange={(event) => setNumber(event.target.value)}/>
                </div>
                <div className="flex flex-col">
                    <label>Birthdate:</label>
                    <Input type="date" value={date} onChange={(event) => setDate(event.target.value)}/>
                </div>
            </div>
        </form>
    )
}

export default Form