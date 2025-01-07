import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/userpage";
import Dashboard from "./components/dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
