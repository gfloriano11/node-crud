import Form from './components/Form.jsx';
import Users from './components/Users.jsx';

function App() {

  return (
    <div className="bg-gray-100 w-dvw h-dvh flex flex-col justify-start items-center pt-4 gap-2">
      <h1 className="text-black font-normal font-inter text-3xl">Create Your User:</h1>
      <div>
        <Form></Form>
      </div>
      <div>
        <Users></Users>
      </div>
    </div>
  )
}

export default App