function Users(){
    return (
        <div className="bg-gray-100 grid md:grid-cols-3 grid-cols-2 gap-4
        min-w-30 border-gray-400 border-2 rounded-2xl pt-2 p-4 shadow-2xl shadow-gray-400
        md:w-3xl w-full ml-3 mr-3">
            <div>
                <p className="inline md:text-xl text-lg">Name</p>
                <div>
                    <div>
                        <p className="break-words">Gustavo Floriano</p>
                    </div>
                    <div>
                        <p className="break-words">Gustavo Floriano</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="inline md:text-xl text-lg">E-mail</p>
                <div>
                    <div>
                        <p className="break-words">gustavofloriano70@gmail.com</p>
                    </div>
                    <div>
                        <p className="break-words">gflorianodev@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <p className="inline md:text-xl text-lg">Phone Number</p>
                <div></div>
            </div>
        </div>
    );
}

export default Users;