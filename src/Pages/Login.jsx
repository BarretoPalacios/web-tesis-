import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/token", {
        method: "POST",
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'username': username,  // Reemplaza por el nombre de usuario
          'password': password     // Reemplaza por la contraseña
        })
      });

      const data = await response.json();

      if (response.ok) {
        // Guardar el token JWT en localStorage
        localStorage.setItem("token", data.access_token);
        // Redireccionar a la página del panel de administrador
        navigate("/admin");
      } else {
        setError("Login failed: " + data.detail);
      }
    } catch (error) {
      setError("An error occurred: " + error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#792D2B]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex  justify-center">
          <Link to={"/"}>
            <div className="max-w-[100px] ">
              <img src="/public/logo.png" alt="logo de textileria luz" />
            </div>
          </Link>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-[#792D2B] hover:bg-[#792D2B]/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
