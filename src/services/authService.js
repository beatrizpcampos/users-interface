import { useState } from 'react';

export const useAuthService = () =>{
  const [authToken, setAuthToken] = useState(null);
  const [username, setUsername] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch("/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();

      sessionStorage.setItem('auth-token', data.token);
      sessionStorage.setItem('username', data.name);

      setAuthToken(data.token);
      setUsername(data.name);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await fetch("/auth/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        mode: "cors"
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();

      sessionStorage.setItem('auth-token', data.token);
      sessionStorage.setItem('username', data.name);

      setAuthToken(data.token);
      setUsername(data.name);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return { login, signup, authToken, username };
};