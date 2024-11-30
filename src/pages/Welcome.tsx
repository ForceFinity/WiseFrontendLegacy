// App.tsx
import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { styleText } from 'util';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (username === 'admin' && password === 'password') {
      // Redirect to a different page or show a success message
      alert('Login successful');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className='flex items-center justify-center flex-col h-screen'>
        <div className='flex justify-center items-center flex-col gap-2'>
        <h1 className='text-black text-6xl font-bold text-center'>Welcome to <br /> Project X</h1>
            <Button variant="outline" className='bg-gray-950 text-white hover:bg-gray-700 hover:text-white mt-16 w-36 h-10'>Create Account</Button>
            <a href="" className='text-black underline'>Log in</a>
        </div>
    </div>
  );
};

export default Login;
