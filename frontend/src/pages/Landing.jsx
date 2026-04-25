import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar.jsx';
import HeroSection from '../components/landing/HeroSection.jsx';
import CapabilitiesSection from '../components/landing/CapabilitiesSection.jsx';
import ProcessSection from '../components/landing/ProcessSection.jsx';
import Footer from '../components/layout/Footer.jsx';
import SignupModal from '../components/auth/SignupModal.jsx';
import LoginModal from '../components/auth/LoginModal.jsx';
import ForgotPasswordModal from '../components/auth/ForgotPasswordModal.jsx';

export default function Landing() {
    const [activeModal, setActiveModal] = useState(null);

    const closeModal = () => setActiveModal(null);

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900 relative">
            <Navbar openModal={setActiveModal} />
            <main className="flex-grow w-full">
                <HeroSection openModal={setActiveModal} />
                <CapabilitiesSection />
                <ProcessSection />
            </main>
            <Footer />

            {/* Auth Modals Overlay */}
            {activeModal === 'signup' && <SignupModal onClose={closeModal} switchModal={setActiveModal} />}
            {activeModal === 'login' && <LoginModal onClose={closeModal} switchModal={setActiveModal} />}
            {activeModal === 'forgot' && <ForgotPasswordModal onClose={closeModal} switchModal={setActiveModal} />}
        </div>
    );
}
