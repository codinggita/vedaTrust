import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';
import DashboardTopbar from './DashboardTopbar';

export default function DashboardLayout() {
    return (
        <div className="flex h-screen w-full bg-[#f8fafc] overflow-hidden">
            {/* Sidebar - fixed width */}
            <DashboardSidebar />

            {/* Main Content Area */}
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                {/* Top Navbar */}
                <DashboardTopbar />

                {/* Scrollable Page Content */}
                <main className="flex-1 overflow-y-auto p-8 relative">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
