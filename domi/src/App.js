import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Mainpage";
import Login from "./pages/Login";
import Posted from "./pages/Posted";
import Posting from "./pages/Posting";
import Chat from "./pages/Chat";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/posting" element={<Posting />} />
                    <Route exact path="/posted" element={<Posted />} />
                    <Route exact path="/chat" element={<Chat />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
