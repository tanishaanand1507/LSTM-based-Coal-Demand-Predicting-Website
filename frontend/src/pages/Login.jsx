import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginUser = async (e) => {

    e.preventDefault()

    try {

      const res = await axios.post(
        "http://127.0.0.1:5000/login",
        {
          email,
          password
        }
      )

      if (res.data.message === "Login successful") {

        navigate("/dashboard")
      }

      else {

        alert("Invalid Credentials")
      }
    }

    catch (error) {

      alert("Backend Error")
    }
  }

  return (

    <div className="min-h-screen bg-black flex justify-center items-center">

      <form
        onSubmit={loginUser}
        className="bg-gray-900 p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-4xl text-orange-500 font-bold mb-10 text-center">
          CoalVision AI Login
        </h1>

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
          Login
        </button>

        <p className="text-gray-400 text-center mt-6">

          Don't have an account?

          <span
            className="text-orange-500 cursor-pointer ml-2"
            onClick={() => navigate("/register")}
          >
            Register Here
          </span>

        </p>

      </form>

    </div>
  )
}

export default Login