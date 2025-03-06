function Form(){
    return(
        <form>
            <div className="flex flex-col justify-center">
                <div className="">
                    <label>Name:</label>
                    <input type="text"></input>
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