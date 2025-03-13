import { Pen, Trash2 } from "lucide-react";

function Users({users}){
    return (
        <div className="bg-gray-100 md:grid md:grid-cols-4 flex
        min-w-56.5 border-gray-400 border-2 rounded-2xl pt-2 p-3 shadow-2xl shadow-gray-400
        md:w-3xl w-full">
            <div className="w-28">
                <p className="inline md:text-xl text-lg">Name</p>
                <div className="">
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.full_name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="inline md:text-xl text-lg">E-mail</p>
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:block">
                <p className="inline md:text-xl text-lg">Phone Number</p>
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            <p className="break-words text-sm">{user.phone_number}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row w-full justify-center">
                    {users.map((user) => (
                        <div key={user.id} className="flex w-1/2 justify-between">
                            <a>
                                <Pen className="cursor-pointer"/>
                            </a>
                            <a>
                                <Trash2 className="cursor-pointer"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Users;