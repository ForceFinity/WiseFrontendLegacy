# WiseFrontend (Legacy Version) 


This is the React frontend for **Project Name**, a real-time public transport tracking platform integrating data from BurgasBus and BDZ. It connects to two backend microservices:  

- [**BurgasBusMS (Rust)**](https://github.com/ForceFinity/BurgasBusMS) – Wraps TransportBurgas API  
- [**BDZMS (Python)**](https://github.com/ForceFinity/BDZMS) – Wraps bdz.bg API

## ✨ Features  

- **Interactive Map** – Live transport tracking with `react-leaflet` and `leaflet`  
- **Real-Time Updates** – Fetches and displays transport data dynamically via `axios`  
- **Search & Filtering** – Easily find routes and stops with `react-hook-form` and `zod`  
- **Modern UI** – TailwindCSS, Radix UI components, and Lucide icons  
- **3D Visualizations** – Powered by `react-threejs` and `@react-three/drei`  

## 🛠 Stack  
**React, Vite, Leaflet, TailwindCSS, Axios, Zod, Radix UI**  

## 💼 API Communication  
The frontend fetches and processes transport data from BurgasBusMS and BDZMS via REST APIs, ensuring a smooth and real-time user experience.  

## ⚡ Startup Guide  
1. **Install dependencies:**  
   ```bash  
   npm install  
   ```  
2. **Start the development server:**  
   ```bash  
   npm run dev  
   ```
Now, the app should be running at `http://localhost:5173` by default!  

