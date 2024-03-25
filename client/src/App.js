import React from 'react'
import Main from './Components/Profile/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificProjectView from './Components/Profile/SpecificProjectView';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/view/:id" element={<SpecificProjectView />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App