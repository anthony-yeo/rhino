import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./layout";
import MainPage from "./main-page/main";

import './App.css'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
