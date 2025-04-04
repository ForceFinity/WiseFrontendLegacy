import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import Login from './pages/Login.tsx';
import Signup from '@/pages/SignUp.tsx';
import Welcome from './pages/Welcome.tsx';
import Map from './pages/Map.tsx';

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Map/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signin" element={<Signup/>}/>
                <Route path="/welcome" element={<Welcome/>}/>
                <Route path="/map" element={<Map/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
