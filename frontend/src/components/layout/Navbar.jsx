import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Navbar({ openModal }) {
    return (
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-[#F8FAFC]">
            <div className="flex items-center space-x-2">
                <ShieldCheck className="w-7 h-7 text-[#0b5de5]" fill="#0b5de5" stroke="white" strokeWidth={1.5} />
                <span className="text-xl font-bold text-[#0b5de5] tracking-tight">Vedatrust</span>
            </div>
            <div className="flex items-center space-x-8">
                <button onClick={() => openModal('login')} className="text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                    Log In
                </button>
                <button onClick={() => openModal('signup')} className="bg-[#0b5de5] hover:bg-blue-800 text-white text-sm font-semibold px-6 py-2 rounded shadow-sm transition-all focus:outline-none">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}
