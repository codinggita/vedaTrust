import React, { useMemo } from 'react';
import {
    Scan,
    BadgeCheck,
    AlertTriangle,
    TrendingUp,
    MoreVertical,
    CheckCircle2,
    XCircle,
    AlertCircle,
    Package,
    ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    // ── Read current user from localStorage ──────────────────────────────────
    const currentUser = useMemo(() => {
        try {
            return JSON.parse(localStorage.getItem('vedatrust_currentUser')) || null;
        } catch {
            return null;
        }
    }, []);

    const firstName = currentUser?.fullName?.split(' ')[0] ?? 'there';

    // ── Read this user's scan history from localStorage ───────────────────────
    const userActivity = useMemo(() => {
        try {
            const all = JSON.parse(localStorage.getItem('vedatrust_activity') || '[]');
            if (!currentUser) return [];
            return all.filter(a => a.userEmail === currentUser.email);
        } catch {
            return [];
        }
    }, [currentUser]);

    // ── Compute stats from activity ───────────────────────────────────────────
    const totalScans = userActivity.length;
    const verifiedCount = userActivity.filter(a => a.status === 'Authentic').length;
    const counterfeitCount = userActivity.filter(a => a.status === 'Counterfeit').length;

    const quickStats = [
        {
            id: 1,
            title: 'Total Scans',
            value: totalScans.toLocaleString(),
            icon: Scan,
            trend: totalScans === 0 ? '0%' : '+0%',
            trendUp: true,
            alert: false,
            color: 'blue'
        },
        {
            id: 2,
            title: 'Verified Medicines',
            value: verifiedCount.toLocaleString(),
            icon: BadgeCheck,
            trend: verifiedCount === 0 ? '0%' : '+0%',
            trendUp: true,
            alert: false,
            color: 'green'
        },
        {
            id: 3,
            title: 'Counterfeit Alerts',
            value: counterfeitCount.toLocaleString(),
            icon: AlertTriangle,
            trend: counterfeitCount > 0 ? 'Action Required' : 'All Clear',
            alert: counterfeitCount > 0,
            color: 'red'
        }
    ];

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Authentic':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {status}
                    </span>
                );
            case 'Counterfeit':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 border border-rose-200">
                        <XCircle className="w-3.5 h-3.5" />
                        {status}
                    </span>
                );
            case 'Expired':
                return (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {status}
                    </span>
                );
            default:
                return null;
        }
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 pb-10">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    Welcome back, {currentUser?.fullName ?? 'Guest'}
                </h1>
                <p className="mt-2 text-gray-500 text-sm">Here is your daily verification overview.</p>
            </div>

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {quickStats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`rounded-xl p-6 border shadow-sm flex flex-col justify-between h-40 ${stat.alert
                                ? 'bg-rose-100 border-rose-200/60'
                                : 'bg-white border-gray-200'
                            }`}
                    >
                        <div className="flex justify-between items-start">
                            <div className={`p-2.5 rounded-lg ${stat.alert ? 'bg-rose-200 text-rose-700' :
                                    stat.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'
                                }`}>
                                <stat.icon className="w-5 h-5" />
                            </div>

                            {stat.alert ? (
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-rose-200/50 text-rose-800">
                                    {stat.trend}
                                </span>
                            ) : (
                                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${stat.trendUp ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                                    }`}>
                                    {stat.trendUp && <TrendingUp className="w-3 h-3" />}
                                    {stat.trend}
                                </span>
                            )}
                        </div>

                        <div className="mt-4">
                            <p className={`text-sm font-medium ${stat.alert ? 'text-rose-700' : 'text-gray-500'}`}>
                                {stat.title}
                            </p>
                            <p className={`text-3xl font-bold mt-1 ${stat.alert ? 'text-rose-700' : 'text-gray-900'}`}>
                                {stat.value}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Activity Table */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                    {userActivity.length > 0 && (
                        <Link to="/dashboard/history" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                            View All
                        </Link>
                    )}
                </div>

                {userActivity.length === 0 ? (
                    /* Empty state for new users */
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <ClipboardList className="w-7 h-7 text-gray-400" />
                        </div>
                        <h3 className="text-gray-700 font-semibold text-base mb-1">No activity yet</h3>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Your medicine verification history will appear here once you scan your first medicine.
                        </p>
                        <Link
                            to="/dashboard/verify"
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-md transition-colors"
                        >
                            Start Verification
                        </Link>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                    <th className="px-6 py-4">Medicine Name</th>
                                    <th className="px-6 py-4">Batch No.</th>
                                    <th className="px-6 py-4">Date Scanned</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200/60">
                                {userActivity.slice(0, 10).map((activity) => (
                                    <tr key={activity.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center border border-gray-200/60 flex-shrink-0 group-hover:bg-white transition-colors">
                                                    <Package className="w-5 h-5 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">{activity.name}</p>
                                                    <p className="text-xs text-gray-500 mt-0.5">{activity.company}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-gray-600">{activity.batch}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-gray-600">{activity.date}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {getStatusBadge(activity.status)}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                            <button className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded hover:bg-gray-100">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

        </div>
    );
}
