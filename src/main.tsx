import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Index from './pages/index.tsx';
import Login from './pages/Login.tsx';
import Signup from '@/pages/SignUp.tsx';
import Welcome from './pages/Welcome.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signin" element={<Signup/>} />
          <Route path="/welcome" element={<Welcome/>} />
        </Route>
      </Routes>
    </BrowserRouter>
)
