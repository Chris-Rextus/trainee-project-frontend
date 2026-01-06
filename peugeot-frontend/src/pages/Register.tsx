// src/pages/Register.tsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import InputField from "../components/login/InputField";
import Button from "../components/login/Button";
import bgLogin from "../assets/common/login-wallpaper.jpg";
import { useEffect } from "react";



const Register = () => {

    useEffect(() => {
    document.title = "Create account · Peugeot Tasks";
    }, []);

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="relative min-h-screen">
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgLogin})` }}
        />
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-sm rounded-2xl bg-white shadow-xl px-6 py-8">

            <div className="flex justify-center mb-6">
                <Logo className="h-12" />
            </div>

            <h1 className="text-2xl font-semibold text-center mb-6">
                Create account
            </h1>

            <div className="space-y-4">
                <InputField
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <Button>
                Register
                </Button>
            </div>

            <p className="mt-6 text-center text-xs">
                Already have an account?{" "}
                <button
                onClick={() => navigate("/")}
                className="text-blue-600 hover:underline"
                >
                Sign in
                </button>
            </p>
            

            </div>
        </div>
        </div>
    );
};

export default Register;
