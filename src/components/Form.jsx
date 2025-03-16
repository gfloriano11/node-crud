import { useEffect, useState, useRef } from "react";
import Input from './Input.jsx';

function Form({ edit, onEdit, getUsers }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    const ref = useRef();

    useEffect(() => {
        if (edit) {

            const formattedDate = new Date(edit.birthdate).toISOString().split('T')[0];

            setName(edit.full_name);
            setEmail(edit.email);
            setNumber(edit.phone_number);
            setDate(formattedDate);
        }
    }, [edit]);

    async function handleSubmit(submit) {
        submit.preventDefault();

        const user = ref.current;

        if (!user.name.value || !user.email.value || !user.number.value || !user.birthdate.value) {
            alert('Fill in all fields');
            return;
        }

        const userData = {
            name: user.name.value,
            email: user.email.value,
            number: user.number.value,
            birthdate: user.birthdate.value
        };

        if (edit && edit.id) {
            console.log('in edit');
            const response = await fetch(`http://localhost:8000/users/${edit.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        } else {
            console.log('in create');
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
        }

        setName('');
        setEmail('');
        setNumber('');
        setDate('');

        onEdit(null);
        getUsers();
    }

    return (
        <form ref={ref} onSubmit={handleSubmit}>
            <div className="bg-gray-100 md:flex-row md:items-end min-w-30 flex flex-col justify-center items-center md:gap-3.5 gap-1.5 border-gray-400 border-2 rounded-2xl pt-2 p-4 shadow-2xl shadow-gray-400">
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label htmlFor="name">Name:</label>
                    <Input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label htmlFor="email">E-mail:</label>
                    <Input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label htmlFor="number">Phone Number:</label>
                    <Input type="text" name="number" value={number} onChange={(event) => setNumber(event.target.value)} />
                </div>
                <div className="md:items-start flex flex-col justify-center items-center">
                    <label htmlFor="birthdate">Birthdate:</label>
                    <Input className="lg:w-48 md:w-38 w-47.5 bg-white p-1 border-1 border-gray-400 rounded-md focus:outline-none"
                        type="date" name="birthdate" value={date} onChange={(event) => setDate(event.target.value)} />
                </div>
                <div className="w-full md:flex md:align-bottom">
                    <button className="md:w-20 md:h-8.5 w-full flex flex-col justify-center items-center bg-blue-500 p-2 rounded-lg cursor-pointer">
                        <p className="text-white font-inter">Criar</p>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Form;
