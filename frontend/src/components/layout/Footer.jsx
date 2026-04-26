import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-[#fcfcfc] border-t border-gray-100 py-8 px-8 lg:px-24 flex flex-col lg:flex-row items-center justify-between text-[13px] text-zinc-400">
            <div className="flex flex-col mb-4 lg:mb-0">
                <span className="font-bold text-slate-900 text-[15px] mb-1">Vedatrust</span>
                <span>© 2026 Vedatrust Healthcare. All rights reserved.</span>
            </div>
            <div className="flex items-center justify-center space-x-6">
                <a href="#" className="hover:text-slate-600 font-medium transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-slate-600 font-medium transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-slate-600 font-medium transition-colors">Contact Support</a>
                <a href="#" className="hover:text-slate-600 font-medium transition-colors">Security Protocol</a>
            </div>
        </footer>
    );
}
