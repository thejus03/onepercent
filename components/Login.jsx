'use client'
import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Your login logic here (e.g., authenticate user)
    // For simplicity, we'll just check if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome, {username}!</h2>
      ) : (
        <form className="mt-8 space-y-6" action="#" method="POST">
      <div>
        <button
          type="button"
          onClick={handleLogin}
          className="group relative w-full flex justify-center py-2 px-4 border border-color- text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 from-10% via-sky-500 via-30% to-green-600 hover: focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* Heroicon name: lock-closed */}
            /*<svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M4 8V6a4 4 0 014-4h4a4 4 0 014 4v2a2 2 0 00-2 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2v-5a2 2 0 00-2-2zm4-6a2 2 0 00-2 2v2h8V4a2 2 0 00-2-2H8z" clipRule="evenodd" />
            </svg>
          </span>
          Login
        </button>
      </div>
      {isLoggedIn && <div className="mt-4 text-center text-green-500">Welcome, {username}!</div>}
    </form>
      )}
    </div>
  );
};

export default Login;

// LinkedInLogin.jsx
/*import { LinkedIn } from '@react-linkedin-sdk/linkedin-sdk';

const LinkedInLogin = () => {
  const handleSuccess = (response) => {
    console.log('Login success:', response);
    // Handle the successful login response here
  };

  const handleFailure = (error) => {
    console.error('Login failed:', error);
    // Handle the login failure here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <LinkedIn
        clientId="YOUR_LINKEDIN_CLIENT_ID"
        onFailure={handleFailure}
        onSuccess={handleSuccess}
        redirectUri="http://localhost:3000/auth/linkedin/callback" // Specify your redirect URI
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login with LinkedIn
        </button>
      </LinkedIn>
    </div>
  );
};

export default LinkedInLogin;*/

