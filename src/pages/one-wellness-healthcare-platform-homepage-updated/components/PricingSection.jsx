import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const checkIcon = (
  <svg
    className="inline-block w-5 h-5 mr-2 text-[#F37436] translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);
const xIcon = (
  <svg
    className="inline-block w-5 h-5 mr-2 text-[#FF0000] translate-x-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const PricingSection = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState({});

  useEffect(() => {
    fetchPlans();
    localStorage.removeItem('selectedPlan');
    localStorage.removeItem('allPlansData');
    localStorage.removeItem('beneficiaryData');
    localStorage.removeItem('sponsorData');
    localStorage.removeItem('paymentStatus');
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/all-plans?diaspora=true');
      const data = await response.json();

      if (data.statusCode === 200) {
        setPlans(data.data);
        // Initialize selected durations
        const initialDurations = {};
        data.data.forEach(plan => {
          initialDurations[plan.id] = plan.durations[0]?.id;
        });
        setSelectedDuration(initialDurations);
      } else {
        setError('Failed to fetch plans');
      }
    } catch (err) {
      setError('Failed to fetch plans');
    } finally {
      setLoading(false);
    }
  };

  const getPlanPrice = (plan, durationId) => {
    const planDuration = plan.plan_durations.find(pd => pd.duration_id === durationId);
    return planDuration?.usd_amount || 0;
  };

  const getDurationName = (plan, durationId) => {
    const duration = plan.durations.find(d => d.id === durationId);
    return duration?.name || '';
  };

  const handlePlanSelection = (plan) => {
    // Save the complete plans data to localStorage for ChoosePlanPage
    localStorage.setItem('allPlansData', JSON.stringify(plans));
    
    // Get the selected duration's data
    const selectedDurationData = plan.durations.find(d => d.id === selectedDuration[plan.id]);
    
    const selectedPlanData = {
      id: plan.id,
      name: plan.name,
      price: selectedDurationData?.pivot?.usd_amount || 0,
      period: selectedDurationData?.name || 'month',
      duration: selectedDurationData?.num_days === 365 ? 12 : selectedDurationData?.num_days === 182 ? 6 : 2,
      numberOfDependents: 1,
      total: selectedDurationData?.pivot?.usd_amount || 0,
      selectedDurationId: selectedDuration[plan.id]
    };
    
    // Save selected plan data to localStorage
    localStorage.setItem('selectedPlan', JSON.stringify(selectedPlanData));
    
    // Small delay to ensure localStorage is updated before navigation
    setTimeout(() => {
      navigate('/choose-plan');
    }, 100);
  };

  const renderServices = (services) => {
    // Split services into 3 columns
    const columns = [[], [], []];
    services.forEach((service, index) => {
      columns[index % 3].push(service.name);
    });
    return columns;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-[#025F4C] text-xl">Loading plans...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }
3
  return (
    <section
      id="pricing"
      className="py-12 md:py-20 px-2 bg-white min-h-screen flex flex-col justify-start"
    >
      <div className="max-w-3xl mx-auto text-center md:mb-5">
        <h2 className="text-[#176B1B] text-2xl md:text-3xl font-semibold mb-10 leading-tight">
          Choose the Perfect Plan for Mama & Papa
        </h2>
      </div>
      <div className="flex flex-col items-center w-full">
        {plans.map((plan, index) => (
          <React.Fragment key={plan.id}>
            {/* Main Plan Card */}
            <div className={`${index === 0 ? 'bg-[#025F4C]' : 'bg-[#E6EFED]'} rounded-2xl w-full max-w-4xl px-4 md:px-8 py-8 mb-8 flex flex-col shadow-lg`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className={`${index === 0 ? 'text-white' : 'text-[#176B1B]'} text-2xl font-semibold mb-2 md:mb-0`}>
                  {plan.name}
                </div>
                <div className="flex gap-2 self-end md:self-auto">
                  {plan.durations.map((duration) => (
                    <span
                      key={duration.id}
                      onClick={() => setSelectedDuration({ [plan.id]: duration.id })}
                      className={`px-4 cursor-pointer py-1 rounded-full text-sm font-medium ${selectedDuration[plan.id] === duration.id
                          ? 'bg-[#F6921E] text-white'
                          : index === 0
                            ? 'bg-[#F4F4F4] text-[#0A4B35]'
                            : 'bg-[#F4F4F4] text-[#0A4B35]'
                        }`}
                    >
                      {duration.name === 'annually' ? '12 Months' : '6 Months'}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`${index === 0 ? 'text-[#E6F4EA]' : 'text-[#176B1B]'} text-base mb-16`}>
                {/* {plan.description || 'Your eyes, ears and hands for 360 healthcare for mama and papa'} */}
                {index === 0
                ? 'Your eyes, ears and hands for 360 healthcare for mama and papa.'  : 'A premium healthcare plan tailored for proactive, personalized health management—perfect for families and diaspora sponsors dedicated to ensuring the well-being of their loved ones.'}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {renderServices(plan.services).map((col, i) => (
                  <ul key={i} className="space-y-4">
                    {col.map((feature, idx) => (
                      <li key={idx} className={`flex items-center ${index === 0 ? 'text-white' : 'text-[#176B1B]'} text-base`}>
                        <span className={`w-6 h-6 rounded-full bg-transparent border ${index === 0 ? 'border-[#EAE6AC]' : 'border-[#025F4C]'} text-[#F37436] flex items-center justify-center`}>
                          {checkIcon}
                        </span>
                        <span className="ml-2 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-auto">
                <div className="flex flex-col md:flex-row md:items-end gap-2">
                  <span className={`${index === 0 ? 'text-white' : 'text-[#176B1B]'} text-3xl font-bold mr-2`}>
                    ${getPlanPrice(plan, selectedDuration[plan.id])}
                  </span>
                  <span className="text-[#E6F4EA] text-xl line-through mr-2">
                    {plan.durations[0] === 0 ? '$350' : ''}
                  </span>
                  <span className={`${index === 0 ? 'text-[#E6F4EA]' : 'text-[#A0A0A0]'} text-xs`}>
                    (Inclusive of 7.5% VAT)
                  </span>
                </div>
                <button
                  onClick={() => handlePlanSelection(plan)}
                  className={`${index === 0
                      ? 'bg-[#228821] text-white hover:bg-[#176b1b]'
                      : 'bg-transparent text-[#176B1B] border border-[#228821] hover:bg-[#176b1b] hover:text-white'
                    } px-8 py-3 rounded-lg font-medium text-sm shadow transition mt-4 md:mt-0 md:ml-auto`}
                >
                  Buy Now
                </button>
              </div>
            </div>
            {index === 0 && (
              <div className="text-center text-[#176B1B] text-lg font-light mb-7">
                Or evaluate our exceptional services with a simple trial offer ↓
              </div>
            )}
          </React.Fragment>
        ))}
        {/* Talk to an expert button */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-2xl mt-2">
          <div className="text-[#176B1B] text-md font-normal text-center md:text-left mb-4 md:mb-0">
            Need assistance in choosing the most suitable plan?
          </div>
          <a
            href="#chat-with-our-expert"
            // onClick={() => window.open('https://wa.me/2349026121813?text=Hello%2C%20I%20need%20assistance%20choosing%20a%20plan')}
            className="bg-[#3DA647] text-white px-5 py-3 rounded-lg font-normal text-sm shadow hover:bg-[#176b1b] transition"
          >
            Talk to an expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
