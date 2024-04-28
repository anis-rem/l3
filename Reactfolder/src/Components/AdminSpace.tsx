// AdminSpace.tsx
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import EmployeesManagement from './EmployeesManagement';

const AdminSpace: React.FC = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex space-x-4">
                                <Link to="/adminspace/reports" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Reports Management</Link>
                                <Link to="/adminspace/employees" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Employees Management</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/adminspace/EmployeesManagement" element={<EmployeesManagement/>}/>
            </Routes>
        </div>
    );
};

export default AdminSpace;
