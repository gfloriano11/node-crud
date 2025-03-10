import { useEffect, useState } from 'react';
import Form from './components/Form.jsx';
import Users from './components/Users.jsx';

function App() {

  const [users, setUsers] = useState([]);
  const [edit, onEdit] = useState(null);

  useEffect(() => {

    async function getUsers(){

      const response = await fetch('http://localhost:8000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data)
    }

    getUsers();
  }, [setUsers]);

  return (
    <div className="bg-gray-100 w-dvw h-dvh flex flex-col justify-start items-center pt-4 gap-2">
      <h1 className="text-black font-normal font-inter text-3xl">Create Your User:</h1>
      <div>
        <Form></Form>
      </div>
      <div>
        <Users users={users}></Users>
      </div>
    </div>
  )
}

export default App