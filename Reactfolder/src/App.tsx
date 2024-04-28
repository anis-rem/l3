import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeesManagement from './Components/EmployeesManagement';
import Login from './Components/Login';
import AdminSpace from './Components/AdminSpace';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/adminspace/*" element={<AdminSpace />} />
                </Routes>
            </div>
        </Router>
    );
};


export default App;
