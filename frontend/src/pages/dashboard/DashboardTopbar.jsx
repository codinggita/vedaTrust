import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function DashboardTopbar() {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 shadow-sm z-10 w-full">
            <div className="flex items-center gap-4">
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
                    <Bell className="w-5 h-5" />
                </button>
                <button className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100">
                    <Settings className="w-5 h-5" />
                </button>
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden border border-gray-200 cursor-pointer">
                    {/* Avatar - using user icon as fallback if no image */}
                    <User className="w-5 h-5 text-teal-600" />
                </div>
            </div>
        </header>
    );
}
