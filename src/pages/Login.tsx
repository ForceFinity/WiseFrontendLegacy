// App.tsx
import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const Login: React.FC = () => {
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    //
    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault();
    //
    //     if (username === 'admin' && password === 'password') {
    //         // Redirect to a different page or show a success message
    //         alert('Login successful');
    //     } else {
    //         setError('Invalid credentials');
    //     }
    // };

    return (
        <div className='flex h-screen items-center justify-center flex-col align-middle gap-12'>

            <h1 className='text-black text-6xl font-bold'>Login</h1>

            <div className='flex w-full justify-center items-center flex-col gap-2'>
                <div className="grid w-3/4 items-center gap-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email"/>
                </div>
                <div className="grid w-3/4 items-center gap-1.5">
                    <Label htmlFor="email">Password</Label>
                    <Input type="password" id="password" placeholder="Password"/>
                </div>
                <Button variant="outline"
                        className='bg-gray-950 text-white hover:bg-gray-700 hover:text-white mt-16 w-28 h-10'>Continue</Button>
            </div>

        </div>
    );
};

export default Login;
