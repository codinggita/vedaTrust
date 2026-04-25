import React from 'react';
import { Shield, QrCode } from 'lucide-react';

export default function HeroSection({ openModal }) {
    return (
        <section className="w-full px-8 lg:px-24 py-16 flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#F8FAFC]">
            <div className="flex-1 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    <Shield className="w-4 h-4 text-[#0b5de5]" />
                    <span className="text-xs font-bold text-blue-800 tracking-wider">SECURE VERIFICATION PLATFORM</span>
                </div>

                <h1 className="text-5xl lg:text-[64px] font-semibold leading-[1.05] text-[#1e293b] tracking-tight">
                    Verify Medicines<br />
                    Before You <span className="text-[#0b5de5]">Trust</span><br />
                    <span className="text-[#0b5de5]">Them</span>
                </h1>

                <p className="text-slate-500 text-[17px] max-w-[500px] leading-relaxed pt-2">
                    Ensure the authenticity and safety of your prescriptions instantly with our advanced cryptographic verification platform. Protecting patients, empowering providers.
                </p>

                <div className="flex items-center space-x-4 pt-4">
                    <button
                        onClick={() => openModal('signup')}
                        className="bg-[#0b5de5] hover:bg-blue-800 text-white px-7 py-3 rounded flex items-center space-x-2 transition-all shadow-sm"
                    >
                        <QrCode className="w-4 h-4" />
                        <span className="font-semibold text-sm">Scan Now</span>
                    </button>
                    <button className="bg-white border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-3 rounded font-semibold text-sm transition-all">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full flex justify-end">
                <div className="w-full max-w-[580px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                    <img
                        src="/hero-doctor.png"
                        alt="Doctor verifying medicines"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
