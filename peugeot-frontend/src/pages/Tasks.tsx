// src/pages/Tasks.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/common/Logo";
import Button from "../components/login/Button";
import { logout } from "../utils/auth";


const Tasks = () => {

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Tasks · Peugeot Tasks";
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-neutral-200">
        <Logo className="h-8 w-auto" />

        <Button
          onClick={handleLogout}
          className="bg-neutral-800 hover:bg-neutral-700 text-white"
        >
          Logout
        </Button>
      </header>

      {/* Main content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-4">
          Tasks
        </h1>

        <p className="text-sm text-neutral-600">
          Task management UI will go here.
        </p>
      </main>
    </div>
  );
};

export default Tasks;