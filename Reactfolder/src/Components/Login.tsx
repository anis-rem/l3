import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const Login  = () => {
    const [values, setValues] = useState({ Username: '', Password: '' });
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post('http://localhost:3000/auth/Adminlogin', values)
            .then(result => {
                if (result.data.loginStatus && result.data.adminSpace) {
                    navigate('/adminspace');
                } else {
                    console.log(result.data.error);
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login page</h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="Username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="Username"
                            name="Username"
                            type="text"
                            autoComplete="Username"
                            required
                            onChange={(e) => setValues({ ...values, Username: e.target.value })}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="Password"
                            name="Password"
                            type="password"
                            autoComplete="current-password"
                            required
                            onChange={(e) => setValues({ ...values, Password: e.target.value })}
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
