import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlanCard = ({ title, price, features, type, onSelect, selectedPlanData }) => {
  const [dependents, setDependents] = useState(1);
  const [duration, setDuration] = useState(type === 'health-visit' ? 1 : 6);
  const basePrice = price;

  useEffect(() => {
    // Set initial duration based on selected plan
    if (selectedPlanData && selectedPlanData.planName === title) {
      const durationMonths = selectedPlanData.durationName.includes('annually') 
        ? 12 
        : selectedPlanData.durationName.includes('bi-annually')
          ? 6
          : selectedPlanData.durationName.includes('bi-monthly')
            ? 2
            : 1;
      setDuration(durationMonths);
    }
  }, [selectedPlanData, title]);

  const handleDependentChange = (change) => {
    const newValue = dependents + change;
    if (newValue >= 1) {
      setDependents(newValue);
    }
  };

  const handleDurationChange = (change) => {
    if (type === 'health-visit') {
      const newValue = duration + change;
      if (newValue >= 1 && newValue <= 6) {
        setDuration(newValue);
      }
    } else {
      setDuration(change === 1 ? 12 : 6);
    }
  };

  const calculateTotalPrice = () => {
    const dependentPrice = basePrice * 0.5 * (dependents - 1); // 50% of base price per additional dependent
    return (basePrice + dependentPrice) * (duration / (type === 'health-visit' ? 2 : 6)); // Normalize duration price
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E6F4EA]">
      <h3 className="text-2xl font-bold text-[#025F4C] mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-[#3DA647]">₦{calculateTotalPrice().toLocaleString()}</span>
        <span className="text-[#8b909a]">/total</span>
      </div>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-2">
            Number of Dependents
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleDependentChange(-1)}
              disabled={dependents <= 1}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                dependents <= 1 ? 'bg-gray-200 text-gray-400' : 'bg-[#E6F4EA] text-[#3DA647] hover:bg-[#3DA647] hover:text-white'
              }`}
            >
              -
            </button>
            <span className="text-lg font-medium text-[#025F4C]">{dependents}</span>
            <button
              onClick={() => handleDependentChange(1)}
              className="w-8 h-8 rounded-full bg-[#E6F4EA] text-[#3DA647] hover:bg-[#3DA647] hover:text-white flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-2">
            Duration
          </label>
          {type === 'health-visit' ? (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDurationChange(-1)}
                disabled={duration === 1}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  duration === 1 ? 'bg-gray-200 text-gray-400' : 'bg-[#E6F4EA] text-[#3DA647] hover:bg-[#3DA647] hover:text-white'
                }`}
              >
                -
              </button>
              <span className="text-lg font-medium text-[#025F4C]">{duration} month{duration > 1 ? 's' : ''}</span>
              <button
                onClick={() => handleDurationChange(1)}
                disabled={duration === 6}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  duration === 6 ? 'bg-gray-200 text-gray-400' : 'bg-[#E6F4EA] text-[#3DA647] hover:bg-[#3DA647] hover:text-white'
                }`}
              >
                +
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleDurationChange(-1)}
                className={`px-4 py-2 rounded-lg ${
                  duration === 6 ? 'bg-[#3DA647] text-white' : 'bg-[#E6F4EA] text-[#3DA647]'
                }`}
              >
                6 months
              </button>
              <button
                onClick={() => handleDurationChange(1)}
                className={`px-4 py-2 rounded-lg ${
                  duration === 12 ? 'bg-[#3DA647] text-white' : 'bg-[#E6F4EA] text-[#3DA647]'
                }`}
              >
                12 months
              </button>
            </div>
          )}
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-[#025F4C]">
            <svg className="w-5 h-5 text-[#3DA647] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect({
          type,
          dependents,
          duration,
          totalPrice: calculateTotalPrice(),
          title,
          features
        })}
        className="w-full bg-[#3DA647] text-white py-3 rounded-lg font-medium hover:bg-[#218838] transition-colors"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

const PlansSection = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(null);

  useEffect(() => {
    // Get selected plan from localStorage
    const storedPlan = localStorage.getItem('selectedPlan');
    if (storedPlan) {
      setSelectedPlanData(JSON.parse(storedPlan));
    }
  }, []);

  const handlePlanSelection = (planDetails) => {
    // Update selected plan with payment details
    const updatedPlanData = {
      ...selectedPlanData,
      dependents: planDetails.dependents,
      duration: planDetails.duration,
      totalPrice: planDetails.totalPrice
    };
    
    // Store updated plan details
    localStorage.setItem('selectedPlan', JSON.stringify(updatedPlanData));
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Redirect after 2 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
      navigate('/sponsor');
    }, 2000);
  };

  const plans = [
    {
      title: selectedPlanData?.planName || "Mama & Papa Health Visit",
      type: "health-visit",
      price: selectedPlanData?.price || 60,
      features: selectedPlanData?.services || [
        "24/7 Doctor Access",
        "Unlimited Consultations",
        "Prescription Management",
        "Health Records Access",
        "Emergency Support"
      ]
    },
    {
      title: "Mama & Papa 360",
      type: "360",
      price: selectedPlanData?.price || 200,
      features: selectedPlanData?.services || [
        "All Health Visit Features",
        "Hospital Network Access",
        "Specialist Consultations",
        "Annual Health Checkup",
        "Wellness Programs"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#025F4C] mb-4">
            Customize Your Plan
          </h2>
          <p className="text-[#8b909a] text-lg">
            Adjust the number of dependents and duration for your selected plan
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PlanCard
              key={plan.type}
              {...plan}
              onSelect={handlePlanSelection}
              selectedPlanData={selectedPlanData}
            />
          ))}
        </div>
      </div>

      {/* Payment Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-4">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E6F4EA] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#3DA647]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#025F4C] mb-2">
                Payment Successful
              </h3>
              <p className="text-[#025F4C]">
                Redirecting you to add your details...
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlansSection;