// src/LoginPage.js
import React, { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const PASSWORD = process.env.REACT_APP_PROTECTED_PAGE_PASSWORD



const LoginPage = () => {
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser, setCurrentUser} = useContext(AuthContext);


//   const { from } = location.state 
  const handleSubmit = (e) => {
    e.preventDefault();


    if (inputPassword === PASSWORD) {

    localStorage.setItem("user",'isAuthenticated');

      setCurrentUser(true);
      navigate(-1, {replace: true});
      setError(null);
    } else {
      setError("Invalid password");
    }
  };

  

  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md">
      <h1 className="mb-4">Please enter a password to access this page:</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={inputPassword}
          className="block w-full mt-1 mb-4 p-2 border border-gray-300 rounded"
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <br />
        <button type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"

        >Confirm</button>
      </form>
    </div>
  </div>
  );
};

export default LoginPage;
