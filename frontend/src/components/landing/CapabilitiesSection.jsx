import React from 'react';
import { QrCode, FileText, Store } from 'lucide-react';

export default function CapabilitiesSection() {
    return (
        <section className="w-full px-8 lg:px-24 py-24 bg-white flex flex-col items-center">
            <div className="text-center max-w-2xl mb-14 space-y-3">
                <h2 className="text-[34px] font-bold text-slate-900 tracking-tight">Platform Capabilities</h2>
                <p className="text-slate-500 text-[16px]">
                    Engineered for absolute clarity and verifiable integrity at every step of the supply chain.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-[1100px]">
                {/* Left tall card */}
                <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-8 lg:p-10 flex flex-col justify-center gap-6 min-h-[320px]">
                    <div className="w-[52px] h-[52px] bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-50">
                        <QrCode className="text-[#0b5de5] w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant QR Verification</h3>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
                            Scan the unique encrypted QR code on any participating medication package to instantly verify its origin, batch integrity, and expiration status directly against the manufacturer's secure ledger.
                        </p>
                    </div>
                </div>

                {/* Right column with 2 cards */}
                <div className="flex flex-col gap-6">
                    <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-8 flex flex-col justify-center gap-5 flex-1">
                        <div className="w-[44px] h-[44px] bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-50">
                            <FileText className="text-[#10B981] w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1.5">Prescription Validation</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed">
                                Cross-reference digital prescriptions with physical dispensaries to prevent fraud and ensure dosage accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-8 flex flex-col justify-center gap-5 flex-1">
                        <div className="w-[44px] h-[44px] bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-50">
                            <Store className="text-amber-600 w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-1.5">Verified Pharmacies</h3>
                            <p className="text-slate-500 text-[14px] leading-relaxed">
                                Locate and interact exclusively with licensed dispensaries within our trusted network ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
