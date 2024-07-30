import React from "react";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="app-container w-100 p-0 m-0">
      <Routes>
        <Route path="/" Component={Homepage} exact />
        {/* <Route path="/chats" Component={Chatpage} /> */}
      </Routes>
    </div>
  );
}

export default App;
