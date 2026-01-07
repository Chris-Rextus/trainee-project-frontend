// src/pages/Login.tsx

import { useState } from 'react';
import Logo from '../components/common/Logo';
import InputField from '../components/login/InputField';
import Button from '../components/login/Button';
import bgLogin from '../assets/common/login-wallpaper.jpg';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from '../services/authService';
import { setAuthToken } from '../utils/auth';


const Login = () => {

    useEffect(() => {
        document.title = "Sign in · Peugeot Tasks";
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {

        setIsLoading(true);

        try {
            const response = await login({ email, password });


            setAuthToken(response.token);

  
            navigate("/tasks");
        } catch (error) {
            alert(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <div className="relative min-h-screen">

        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
            backgroundImage: `url(${bgLogin})`,
        }}
        />

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

        <div className="w-full max-w-sm rounded-2xl bg-white shadow-xl border border-neutral-200 px-6 py-8">

            <div className="flex justify-center mb-6">
            <Logo className="h-12 w-auto" />
            </div>

            <div className="text-center mb-6">
            <h1 className="text-2xl font-semibold text-neutral-900">
                Sign in
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
                Use your email and password
            </p>
            </div>

            <div className="space-y-4">

            <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                Email
                </label>
                <InputField
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                <label className="block text-xs font-medium text-neutral-600 mb-1">
                Password
                </label>
                <InputField
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-neutral-600">
                <input
                    type="checkbox"
                    className="h-3.5 w-3.5 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
                />
                Remember me
                </label>
                <button className="font-medium text-blue-600 hover:text-blue-700">
                Forgot password
                </button>
            </div>

            <Button
            onClick={handleLogin}
            isLoading={isLoading}
            className="mt-4 w-full bg-[#5B5B5B] hover:bg-[#767676] text-white shadow-sm"
        >
            Sign in
        </Button>

            </div>

            <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-neutral-200" />
            <span className="mx-3 text-[10px] uppercase tracking-wide text-neutral-400">
                Or
            </span>
            <div className="flex-1 border-t border-neutral-200" />
            </div>

            <p className="mt-6 text-center text-xs text-neutral-500">
            No account?{" "}
            <button
                onClick={() => navigate("/register")}
                className="font-medium text-blue-600 hover:text-blue-700"
                >
                Create one
            </button>
            </p>    

        </div>
        </div>
    </div>
    );
    }

export default Login;