import { useEffect, useState, useRef } from "react"
import Input from './Input.jsx';

function Form({edit, onEdit}){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    const ref = useRef();

    async function handleSubmit(submit){
        submit.preventDefault();

        const user = ref.current;

        if(!user.full_name.value || !user.email.value || !user.phone_number.value || !user.birthdate.value){
            alert('Fill in all fields');
            return;
        }

        if(onEdit){
            const response = await fetch(`http://localhost:8000/users/${edit.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: user.full_name.value,
                    email: user.email.value,
                    number: user.phone_number.value,
                    date: user.birthdate.value
                })
                
            })
        }
    }

    return(
        <form method="POST" action="http://localhost:8000/users/create" ref={ref} onSubmit={handleSubmit}> 
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