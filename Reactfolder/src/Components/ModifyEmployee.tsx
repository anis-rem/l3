import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AddEmployee from './AddEmployee';
import DeleteEmployee from './DeleteEmployee';
import ModifyEmployee from './ModifyEmployee';

const EmployeesManagement: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Employees Management</h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <Link
                            to="/adminspace/employees/add"
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Add an Employee Account
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/adminspace/employees/delete"
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Delete an Employee Account
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/adminspace/employees/modify"
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Modify an Employee Account
                        </Link>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/adminspace/employees/add" element={<AddEmployee />} />
                <Route path="/adminspace/employees/delete" element={<DeleteEmployee />} />
                <Route path="/adminspace/employees/modify" element={<ModifyEmployee />} />
            </Routes>
        </div>
    );
};

export default EmployeesManagement;
