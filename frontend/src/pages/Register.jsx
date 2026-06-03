import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerUser = async (e) => {

    e.preventDefault()

    try {
        await axios.post(
        "http://127.0.0.1:5000/register",
        {
          name,
          email,
          password
        }
      )

      alert("Registration Successful")

      navigate("/")
    }

    catch (error) {

      alert("Registration Failed")
    }
  }
   return (

    <div className="min-h-screen bg-black flex justify-center items-center">

      <form
        onSubmit={registerUser}
        className="bg-gray-900 p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-4xl text-orange-500 font-bold mb-10 text-center">
          Register
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full p-4 rounded-xl mb-6 bg-black text-white"
          onChange={(e) => setName(e.target.value)}
        />
                <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-4 rounded-xl mb-6 bg-black text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-4 rounded-xl mb-8 bg-black text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-orange-500 py-4 rounded-xl text-white"
        >
          Register
                  </button>

      </form>

    </div>
  )
}

export default Register