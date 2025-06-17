import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get the session_id from URL if present
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session_id');

    if (sessionId) {
      // You could verify the payment status here with your backend if needed
      console.log('Payment session ID:', sessionId);
    }

    // Store payment success status
    localStorage.setItem('paymentStatus', 'success');

    // Automatically redirect to add beneficiary page after 3 seconds
    const timer = setTimeout(() => {
      navigate('/add-beneficiary');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate, location]);

  return (
    <div className="min-h-screen bg-[#025F4C] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#E6F4EA] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-[#3DA647]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-[#025F4C] mb-4">
            Payment Successful!
          </h1>
          
          <p className="text-[#025F4C] mb-4">
            Thank you for your payment. You will be redirected to add your beneficiary's details shortly.
          </p>
          
          <div className="animate-pulse">
            <p className="text-[#3DA647]">
              Redirecting...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage; 