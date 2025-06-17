import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import { loadStripe } from '@stripe/stripe-js';

const API_URL = import.meta.env.VITE_API_URL;
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// Features for both plans
const features = {
  'Mama & Papa 360': [
    'Monthly home visits by healthcare professionals',
    'Unlimited 24/7 doctor consultations',
    'Dedicated Care Partner',
    'Refillable wallets for chronic medications',
    'First Aid & Primary Care during visits',
    'Up to 10% discount on medications',
    'Virtual wellness checks',
    'WhatsApp group with doctors & family',
    'Personalized treatment plan',
    'Hospitals, ambulance & emergency coverage',
    'Surgery, chronic conditions, cancer care, dental & optical coverage',
  ],
  'Mama & Papa Healthvisit': [
    'Monthly home visits by healthcare professionals',
    'Unlimited 24/7 doctor consultations',
    'Dedicated Care Partner',
    'First Aid & Primary Care during visits',
    'Virtual wellness checks',
    'WhatsApp group with doctors & family',
    'Personalized treatment plan',
  ],
};

const PlanDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [plan, setPlan] = useState(null);
  const [allPlans, setAllPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setPlan(null);
    setIsLoading(true);

    // Get both the selected plan and all plans data
    const savedPlan = localStorage.getItem('selectedPlan');
    const savedAllPlans = localStorage.getItem('allPlansData');

    if (savedPlan && savedAllPlans) {
      try {
        const parsedPlan = JSON.parse(savedPlan);
        const parsedAllPlans = JSON.parse(savedAllPlans);

        // console.log('parsedAllPlans',parsedAllPlans[0]);
        
        // Find the full plan data from allPlans
        const fullPlanData = parsedAllPlans.find(p => p.id === parsedPlan.id);
        
        // Merge the data
        const mergedPlan = {
          ...parsedPlan,
          fullData: fullPlanData,
          services: fullPlanData?.services || [],
          description: parsedPlan?.name === 'Mama & Papa 360' ? 'Your eyes, ears and hands for 360 healthcare for mama and papa.' : 'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.'
          // description: fullPlanData?.description !== null ?  'Your eyes, ears and hands for 360 healthcare for mama and papa'
        };

        // console.log('mergedPlan',mergedPlan);

        setPlan(mergedPlan);
        setAllPlans(parsedAllPlans);
      } catch (error) {
        console.error('Error parsing saved plans:', error);
        navigate('/choose-plan');
      }
    } else {
      navigate('/choose-plan');
    }
    
    setIsLoading(false);
  }, [navigate]);

  const handleProceedToPay = async () => {
    if (!plan.total || isNaN(plan.total)) {
      console.error('Invalid plan total for payment:', plan.total);
      setError('Cannot proceed with payment: Invalid plan total.');
      return;
    }

    setIsProcessingPayment(true);
    setError(null);

    try {
      // Get sponsor email from localStorage
      const sponsorData = JSON.parse(localStorage.getItem('sponsorData') || '{}');
      const savedPlan = JSON.parse(localStorage.getItem('selectedPlan'));

    
      const sponsorEmail = sponsorData.email;

      if (!sponsorEmail) {
        setError('Sponsor email not found. Please register as a sponsor first.');
        return;
      }

      const payload = {
        planId: plan.id,
        planName: plan.name,
        planDuration: plan.duration,
        amount: Math.round(plan.total * 100), // Convert to cents
        currency: 'usd',
        successUrl: `${window.location.origin}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/plan-details`,
        metadata: {
          plan_id: plan.id,
          plan_name: plan.name,
          duration_id: savedPlan.duration_id,
          beneficiary_count: plan.numberOfDependents,
          sponsor_email: sponsorEmail,
        },
      };
      // console.log('Sending payload:', payload);

      const response = await fetch(`${API_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      let data;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        throw new Error('Received non-JSON response from server');
      }

      // console.log('Checkout Session Response:', data);

      if (!response.ok) {
        throw new Error(data?.message || `Request failed with status ${response.status}`);
      }

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to initialize');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.id
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

    } catch (err) {
      console.error('Detailed error:', err);

      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        setError('Network error. Please check your internet connection.');
      } else if (err.message.includes('CORS')) {
        setError('Cross-Origin Request Blocked. Please try again later or contact support.');
      } else {
        setError(err.message || 'An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsProcessingPayment(false);
    }
  };

  if (isLoading || !plan) {
    return (
      <div className="min-h-screen bg-[#025F4C] flex items-center justify-center">
        <div className="text-white text-xl">Loading plan details...</div>
      </div>
    );
  }

  // Get the features based on the plan name
  const planFeatures = plan.services.map(service => service.name) || features[plan.name] || [];

  return (
    <div className="min-h-screen bg-[#025F4C] md:pb-12 px-0 flex items-center justify-center pt-24">
      <div className="container mx-auto max-w-6xl">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 mx-4 md:mx-0" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row items-center md:gap-8">
          {/* Left Side - Plan Card */}
          <div className="border border-[#E6F4EA] md:rounded-3xl px-4 py-8 md:p-8 shadow-lg w-full md:w-1/2 bg-white mb-8 md:mb-0">
            <div className="flex justify-between items-start mb-4">
              <div className='flex justify-between items-center w-full'>
                <h2 className="text-4xl font-bold text-[#025F4C]">${plan.price}</h2>
                <span className="text-[#025F4C]">
                  {plan.period === 'annually' ? 'Per Year' : 
                   plan.period === 'bi-annually' ? 'Per 6 Months' : 
                   'Per 2 Months'}
                </span>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#025F4C] mb-4 mt-8">
              {plan.name}
            </h3>
            <p className="text-[#025F4C] mb-8">
              {plan.description}
            </p>
            <div className="space-y-4">
              {planFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-[#3DA647] flex-shrink-0 mt-0.5" />
                  <span className="text-[#025F4C]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Summary */}
          <div className="space-y-6 w-full md:w-1/2">
            <div className="w-full md:w-[400px] mx-auto bg-[#E6F4EA] md:rounded-2xl p-6 shadow-lg">
              <div className='border-b border-[#025F4C] mb-2 pb-4'>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#025F4C]">Plan:</span>
                    <span className="font-semibold text-[#025F4C]">{plan.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#025F4C]">Duration:</span>
                    <span className="font-semibold text-[#025F4C]">
                      {plan.duration} {plan.duration > 1 ? 'months' : 'month'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#025F4C]">Dependents:</span>
                    <span className="font-semibold text-[#025F4C]">{plan.numberOfDependents}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-[#025F4C]">
                    <span className="text-[#025F4C]">Total</span>
                    <span className="font-bold text-[#3DA647] text-xl">${plan.total}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleProceedToPay}
                disabled={isProcessingPayment}
                className={`w-full bg-[#3DA647] text-white py-3 px-6 rounded-lg font-medium transition-colors ${
                  isProcessingPayment ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#2C8C35]'
                }`}
              >
                {isProcessingPayment ? 'Processing Payment...' : 'Proceed to Pay'}
              </button>
              <p className="text-xs text-center text-[#025F4C] mt-3">
                By continuing, you accept our{' '}
                <Link to="/terms" className="text-[#3DA647] hover:underline">Terms of use</Link>
                {' '}and{' '}
                <Link to="/privacy" className="text-[#3DA647] hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailsPage; 