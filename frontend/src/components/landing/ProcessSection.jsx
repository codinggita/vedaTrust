import React from 'react';
import { Scan, ShieldCheck, Shield } from 'lucide-react';

export default function ProcessSection() {
    return (
        <section className="w-full px-8 lg:px-24 py-28 bg-[#F8FAFC]">
            <div className="text-center mb-24">
                <h2 className="text-[34px] font-bold text-slate-900 tracking-tight">Simple Verification Process</h2>
            </div>

            <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row justify-between items-start relative px-4">
                {/* Horizontal Line connecting steps */}
                <div className="absolute top-[42px] left-[15%] right-[15%] h-[1px] bg-gray-200 hidden lg:block z-0"></div>

                {/* Step 1 */}
                <div className="flex flex-col items-center flex-1 relative z-10">
                    <div className="w-[84px] h-[84px] bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 relative">
                        <Scan className="w-8 h-8 text-slate-700" />
                        <div className="absolute top-0 -right-2 w-7 h-7 bg-[#0b5de5] rounded-full text-white text-xs font-bold flex items-center justify-center border-[3px] border-white">
                            1
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Scan</h3>
                    <p className="text-slate-500 text-[14px] text-center px-4 leading-relaxed max-w-[280px]">
                        Locate the Vedatrust secure code on the packaging and scan it using our mobile web portal or native app.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center flex-1 relative z-10 mt-12 lg:mt-0">
                    <div className="w-[100px] h-[100px] bg-[#EEF2FC] rounded-full flex items-center justify-center shadow-sm border-[8px] border-white mb-4 relative -top-2">
                        <ShieldCheck className="w-10 h-10 text-[#0b5de5]" fill="#0b5de5" stroke="white" strokeWidth={1.5} />
                        <div className="absolute top-0 -right-1 w-7 h-7 bg-[#0b5de5] rounded-full text-white text-xs font-bold flex items-center justify-center border-[3px] border-white z-20">
                            2
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Verify</h3>
                    <p className="text-slate-500 text-[14px] text-center px-4 leading-relaxed max-w-[280px]">
                        Our system instantly cross-references the cryptographic signature against the immutable ledger.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center flex-1 relative z-10 mt-12 lg:mt-0">
                    <div className="w-[84px] h-[84px] bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mb-6 relative">
                        <Shield className="w-8 h-8 text-[#10B981]" fill="#10B981" stroke="white" />
                        <div className="absolute top-0 -right-2 w-7 h-7 bg-[#0b5de5] rounded-full text-white text-xs font-bold flex items-center justify-center border-[3px] border-white">
                            3
                        </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Trust</h3>
                    <p className="text-slate-500 text-[14px] text-center px-4 leading-relaxed max-w-[280px]">
                        Receive a definitive authenticity confirmation, ensuring the medicine is safe for consumption.
                    </p>
                </div>
            </div>
        </section>
    );
}
