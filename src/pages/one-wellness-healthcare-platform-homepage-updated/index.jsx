import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import RemoteHealthSection from './components/RemoteHealthSection';
import InsuranceSection from './components/InsuranceSection';
import SupportSection from './components/SupportSection';
import TeamMotivationSection from './components/TeamMotivationSection';
import AdminSection from './components/AdminSection';
import PlansSection from './components/PlansSection';
import TestimonialsSection from './components/TestimonialsSection';
import StepsSection from './components/StepsSection';
import MobileSection from './components/MobileSection';
import ClosingCTASection from './components/ClosingCTASection';
import HealthInsurance from './components/HealthInsurance';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import DiscoveryCallSection from './components/DiscoveryCallSection';
import BookingConfirmedSection from './components/BookingConfirmedSection';
import SponsorPage from './components/SponsorPage';
import SponsorSuccessPage from './components/SponsorSuccessPage';
import AddBeneficiaryPage from './components/AddBeneficiaryPage';
import BeneficiarySuccessPage from './components/BeneficiarySuccessPage';
import PaymentSuccessPage from './components/PaymentSuccessPage';

const OneWellnessHealthcarePlatformHomepageUpdated = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <main>
                <HeroSection />
                <BenefitsSection />
                <RemoteHealthSection />
                {/* <InsuranceSection />
                <SupportSection />
                <TeamMotivationSection />
                <HealthInsurance />
                <AdminSection />
                <PlansSection /> */}
                <TestimonialsSection />
                {/* <StepsSection /> */}
                <PricingSection />
                <DiscoveryCallSection />
                {/* <ClosingCTASection /> */}
                <FAQSection />
              </main>
            </>
          } 
        />
        <Route path="/booking-confirmed" element={<BookingConfirmedSection />} />
        <Route path="/sponsor" element={<SponsorPage />} />
        <Route path="/sponsor-success" element={<SponsorSuccessPage />} />
        <Route path="/add-beneficiary" element={<AddBeneficiaryPage />} />
        <Route path="/beneficiary-success" element={<BeneficiarySuccessPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
      </Routes>
    </div>
  );
};

export default OneWellnessHealthcarePlatformHomepageUpdated;