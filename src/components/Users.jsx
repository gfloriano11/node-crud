import { Pen, Trash2 } from "lucide-react";

function Users({users, setUsers, onEdit}){

    async function handleEdit(id){

        const user = users.find((user) => user.id === id);

        onEdit(user);
    }

    async function handleDelete(id){

        const response = await fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok){
            throw new Error('Error to delete user');
        }

        setUsers(users.filter((user) => user.id !== id));
    }

    return (
        <div className="bg-gray-100 flex md:justify-between
        min-w-60 border-gray-400 border-2 rounded-2xl pt-2 p-3 shadow-2xl shadow-gray-400
        md:w-3xl w-full">
            <div className="w-fit">
                <p className="inline md:text-xl text-lg">Name</p>
                <div className="">
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.full_name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-fit">
                <p className="inline md:text-xl text-lg">E-mail</p>
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:block w-fit">
                <p className="inline md:text-xl text-lg">Phone Number</p>
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.phone_number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-end">
                <div className="w-full">
                    {users.map((user) => (
                        <div key={user.id} className="flex w-1/2 md:justify-between md:items-center">
                            <Pen className="cursor-pointer md:w-20 w-10"
                            onClick={() => handleEdit(user.id)}/>
                            <Trash2 className="cursor-pointer md:w-20 w-10"
                            onClick={() => handleDelete(user.id)}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Users;