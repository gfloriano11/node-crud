import { useState } from "react"
import Input from './Input.jsx';

function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return(
        <form>
            <div className="flex justify-center">
                <div className="">
                    <label>Name:</label>
                    <Input></Input>
                </div>
                <div>
                    <label>E-mail:</label>
                    <input type="email"></input>
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Birthdate:</label>
                    <input type="date"></input>
                </div>
            </div>
        </form>
    )
}

export default Form