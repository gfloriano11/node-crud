function Users({users}){
    return (
        <div className="bg-gray-100 grid md:grid-cols-3 grid-cols-2 gap-4
        min-w-56.5 border-gray-400 border-2 rounded-2xl pt-2 p-4 shadow-2xl shadow-gray-400
        md:w-3xl w-full">
            <div>
                <p className="inline md:text-xl text-lg">Name</p>
                <div>
                    {users.map((user, id) => (
                        <div key={id}>
                            <p>{user.full_name}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="inline md:text-xl text-lg">E-mail</p>
                <div>
                    {users.map((user, id) => (
                        <div key={id}>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:block">
                <p className="inline md:text-xl text-lg">Phone Number</p>
                <div>
                    {users.map((user, id) => (
                        <div key={id}>
                            <p>{user.phone_number}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Users;