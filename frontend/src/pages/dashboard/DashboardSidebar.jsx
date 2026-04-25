import React from 'react';
import {
    ShieldCheck,
    Plus,
    LayoutDashboard,
    Scan,
    FileText,
    MapPin,
    History,
    Settings,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { name: 'Medicine Verification', icon: Scan, path: '/dashboard/verify' },
    { name: 'My Prescriptions', icon: FileText, path: '/dashboard/prescriptions' },
    { name: 'Pharmacy Locator', icon: MapPin, path: '/dashboard/locator' },
    { name: 'Verification History', icon: History, path: '/dashboard/history' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
];

export default function DashboardSidebar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('vedatrust_currentUser');
        navigate('/');
    };

    return (
        <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col items-center py-6 shadow-sm z-10">
            {/* Brand */}
            <div className="flex items-center gap-2 px-6 w-full mb-8">
                <ShieldCheck className="w-8 h-8 text-blue-600 fill-blue-600" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold text-gray-900 leading-tight">Vedatrust</span>
                    <span className="text-xs text-gray-500 leading-tight">Medicine Integrity</span>
                </div>
            </div>

            {/* Action Button */}
            <div className="px-6 w-full mb-6 relative z-10">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm">New Verification</span>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 w-full px-4 overflow-y-auto relative z-10">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path ||
                            (item.path !== '/dashboard' && location.pathname.startsWith(item.path));

                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-md transition-colors text-sm font-medium
                    ${isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >
                                    <item.icon className="w-5 h-5 flex-shrink-0" />
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Bottom Footer Links */}
            <div className="w-full px-4 pt-6 border-t border-gray-200 mt-auto">
                <ul className="space-y-1">
                    <li>
                        <Link to="/help" className="flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm font-medium">
                            <HelpCircle className="w-5 h-5 flex-shrink-0" />
                            Help Center
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors text-sm font-medium">
                            <LogOut className="w-5 h-5 flex-shrink-0" />
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
