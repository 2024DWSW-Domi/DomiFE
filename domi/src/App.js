import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/Mainpage";
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Community from "./pages/Community";
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                    <Route exact path="/mypage" element={<Mypage />} />
                    <Route exact path="/community" element={<Community />} />
                    <Route exact path="/login" element={<Login />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
