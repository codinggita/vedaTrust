import React from 'react';
import { Lock, Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordModal({ onClose, switchModal }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-900/60 backdrop-blur-md p-4 w-full h-full">
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-[420px] p-10 flex flex-col items-center relative animate-in fade-in zoom-in-95 duration-200 border border-gray-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm">✕</button>

                <div className="flex flex-col items-center mb-8">
                    <div className="w-10 h-10 bg-[#0b5de5] rounded-xl flex items-center justify-center mb-2 shadow-sm">
                        <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-[#0b5de5] tracking-tight">Vedatrust</h2>
                </div>

                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Lock className="w-5 h-5 text-slate-700" />
                </div>

                <h2 className="text-[24px] font-bold text-slate-900 mb-3 text-center tracking-tight font-serif">Secure Password Reset</h2>
                <p className="text-[13px] text-slate-500 mb-8 text-center leading-relaxed">
                    Don't worry, it happens. Enter the email address associated with your account and we'll send you a secure link to reset your password.
                </p>

                <form className="w-full space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-[11px] font-bold text-slate-700 tracking-wide">Email address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                <Mail className="w-4 h-4 text-gray-400" />
                            </div>
                            <input type="email" placeholder="name@example.com" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0b5de5]/20 focus:border-[#0b5de5] transition-all shadow-sm" />
                        </div>
                    </div>

                    <button type="button" className="w-full bg-[#035ce9] hover:bg-blue-800 text-white font-semibold text-[13px] py-3.5 rounded-lg transition-colors shadow-md my-2">
                        Send Reset Link
                    </button>
                </form>

                <div className="w-full h-px bg-gray-100 my-6"></div>

                <div className="w-full text-center">
                    <p className="text-[13px] text-slate-500 font-medium mb-3">
                        Remember your password?
                    </p>
                    <button
                        type="button"
                        onClick={() => switchModal('login')}
                        className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-slate-700 font-semibold text-[12px] py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Login</span>
                    </button>
                </div>

            </div>
        </div>
    );
}
