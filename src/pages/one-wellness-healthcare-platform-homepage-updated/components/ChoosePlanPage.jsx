import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const plans = [
  {
    id: 40,
    name: 'Mama & Papa 360',
    price: 200,
    period: 'Per Annum',
    durations: [6, 12]
  },
  {
    id: 41,
    name: 'Mama & Papa Healthvisit',
    price: 60,
    period: 'bi-monthly',
    durations: [2, 4, 6]
  },
];

const ChoosePlanPage = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [duration, setDuration] = useState(null);
  const [numberOfDependents, setNumberOfDependents] = useState(1);

  // Load saved plan data from localStorage on component mount
  useEffect(() => {
    const savedPlans = localStorage.getItem('allPlansData');
    const savedPlan = localStorage.getItem('selectedPlan');

    if (savedPlans && savedPlan) {
      try {
        const parsedPlans = JSON.parse(savedPlans);
        const parsedSelectedPlan = JSON.parse(savedPlan);
        // console.log('Retrieved plans from localStorage:', parsedPlans);
        // console.log('Retrieved selected plan from localStorage:', parsedSelectedPlan);
        
        setPlans(parsedPlans);
        
        // Find the matching plan from our plans array using the id
        const matchingPlan = parsedPlans.find(p => p.id === parsedSelectedPlan.id);
        if (matchingPlan) {
          // console.log('Found matching plan:', matchingPlan);
          
          // Set the full plan object with additional data
          const updatedPlan = {
            ...matchingPlan,
            duration: parsedSelectedPlan.duration,
            numberOfDependents: parsedSelectedPlan.numberOfDependents,
            selectedDurationId: parsedSelectedPlan.selectedDurationId
          };
          
          // console.log('Setting selected plan:', updatedPlan);
          setSelectedPlan(updatedPlan);
          setDuration(parsedSelectedPlan.duration);
          setNumberOfDependents(parsedSelectedPlan.numberOfDependents);
        }
      } catch (error) {
        console.error('Error parsing saved data:', error);
      }
    }
  }, []);

  const handlePlanSelect = (plan) => {
    const firstDuration = plan.durations[0];
    const newPlan = {
      ...plan,
      duration: firstDuration.num_days,
      selectedDurationId: firstDuration.id
    };
    setSelectedPlan(newPlan);
    setDuration(firstDuration.num_days);
    setNumberOfDependents(1);

    // Save to localStorage
    const planData = {
      id: plan.id,
      name: plan.name,
      duration: firstDuration.num_days,
      numberOfDependents: 1,
      selectedDurationId: firstDuration.id,
      price: firstDuration.pivot?.usd_amount || 0,
      period: firstDuration.name || 'month',
      total: firstDuration.pivot?.usd_amount || 0
    };
    localStorage.setItem('selectedPlan', JSON.stringify(planData));
  };

  const incrementDuration = () => {
    if (!selectedPlan) return;
    const idx = selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId);
    if (idx < selectedPlan.durations.length - 1) {
      const nextDuration = selectedPlan.durations[idx + 1];
      setDuration(nextDuration.num_days);
      setSelectedPlan(prev => ({
        ...prev,
        duration: nextDuration.num_days,
        selectedDurationId: nextDuration.id
      }));
      updateLocalStorage({
        duration: nextDuration.num_days,
        selectedDurationId: nextDuration.id,
        price: nextDuration.pivot?.usd_amount || 0
      });
    }
  };

  const decrementDuration = () => {
    if (!selectedPlan) return;
    const idx = selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId);
    if (idx > 0) {
      const prevDuration = selectedPlan.durations[idx - 1];
      setDuration(prevDuration.num_days);
      setSelectedPlan(prev => ({
        ...prev,
        duration: prevDuration.num_days,
        selectedDurationId: prevDuration.id
      }));
      updateLocalStorage({
        duration: prevDuration.num_days,
        selectedDurationId: prevDuration.id,
        price: prevDuration.pivot?.usd_amount || 0
      });
    }
  };

  const incrementNumberOfDependents = () => {
    if (numberOfDependents < 10) {
      const newDependents = Number(numberOfDependents) + 1;
      setNumberOfDependents(newDependents);
      updateLocalStorage({ numberOfDependents: newDependents });
    }
  };

  const decrementNumberOfDependents = () => {
    if (numberOfDependents > 1) {
      const newDependents = Number(numberOfDependents) - 1;
      setNumberOfDependents(newDependents);
      updateLocalStorage({ numberOfDependents: newDependents });
    }
  };

  const updateLocalStorage = (updates) => {
    const savedPlan = localStorage.getItem('selectedPlan');
    if (savedPlan && selectedPlan) {
      const currentPlan = JSON.parse(savedPlan);
      const updatedPlan = { ...currentPlan, ...updates };
      localStorage.setItem('selectedPlan', JSON.stringify(updatedPlan));
    }
  };

  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    const durationPrice = selectedPlan.durations.find(d => d.id === selectedPlan.selectedDurationId)?.pivot?.usd_amount || 0;
    return durationPrice * numberOfDependents;
    // return durationPrice + (numberOfDependents * 10);
  };

  const getExactPlanPrice = () => {
    if (!selectedPlan) return 0;
    const durationPrice = selectedPlan.durations.find(d => d.id === selectedPlan.selectedDurationId)?.pivot?.usd_amount || 0;
    return durationPrice;
  };

  const getCurrentDurationObj = () => {
    if (!selectedPlan) return null;
    return selectedPlan.durations.find(d => d.id === selectedPlan.selectedDurationId) || selectedPlan.durations[0];
  };

  const handleDependentChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 10) {
      setNumberOfDependents(value);
      updateLocalStorage({ numberOfDependents: value });
    }
  };

  return (
    <div className="min-h-screen bg-[#025F4C] flex items-center justify-center px-0 pt-24">
      <div className="w-full max-w-xl bg-white md:rounded-3xl shadow-lg py-8 px-4 md:p-10 flex flex-col gap-8">
        <h1 className="text-2xl md:text-3xl font-bold text-[#025F4C] text-center mb-2">Choose a Plan</h1>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#025F4C] mb-3">
              Select a Plan
            </label>
            <div className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex items-center p-4 cursor-pointer rounded-lg border-2 transition-all ${
                    selectedPlan?.id === plan.id
                      ? 'border-[#3DA647] bg-[#E6F4EA]'
                      : 'border-[#E6F4EA] hover:border-[#3DA647] hover:bg-[#E6F4EA]/50'
                  }`}
                  onClick={() => handlePlanSelect(plan)}
                >
                  <div className="flex items-center h-5">
                    <input
                      type="radio"
                      checked={selectedPlan?.id === plan.id}
                      onChange={() => handlePlanSelect(plan)}
                      className="h-4 w-4 text-[#3DA647] border-[#E6F4EA] focus:ring-[#3DA647]"
                    />
                  </div>
                  <div className="ml-4 flex justify-between items-center w-full">
                    <div>
                      <p className="text-[#025F4C] font-semibold">{plan.name}</p>
                      <p className="text-sm text-[#025F4C]/80">
                        {plan.durations[0]?.name === 'annually' ? 'Annual subscription' : 'Monthly subscription'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#3DA647] font-bold">${plan.id === selectedPlan?.id ? getExactPlanPrice() : plan.durations[0]?.pivot?.usd_amount || 0}</p>
                      <p className="text-sm text-[#025F4C]/80">
                        {plan.durations[0]?.name === 'annually' ? '/year' : '/month'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Duration Counter - Show for all plans */}
          {selectedPlan && (
            <div className='border-b border-[#E6F4EA] mb-6 pb-6'>
              <label className="block text-sm font-medium text-[#025F4C] mb-1">
                Duration of Plan
              </label>
              <div className="flex items-center justify-between rounded-lg w-full p-3 bg-[#E6F4EA]">
                <button
                  onClick={decrementDuration}
                  className={`w-10 h-10 flex items-center justify-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-full ${
                    selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId) > 0
                      ? 'hover:text-[#3DA647]'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId) === 0}
                >
                  <span className="text-2xl">−</span>
                </button>
                <span className="text-lg font-bold text-[#025F4C] px-2">
                  {getCurrentDurationObj()?.months ? `${getCurrentDurationObj().months} months` : `${getCurrentDurationObj()?.num_days} days`}
                </span>
                <button
                  onClick={incrementDuration}
                  className={`w-10 h-10 flex items-center justify-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-full ${
                    selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId) < selectedPlan.durations.length - 1
                      ? 'hover:text-[#3DA647]'
                      : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={selectedPlan.durations.findIndex(d => d.id === selectedPlan.selectedDurationId) === selectedPlan.durations.length - 1}
                >
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
          )}

          {/* Number of Dependents - Show for all plans */}
          {selectedPlan && (
            <div className='border-b border-[#E6F4EA] mb-6 pb-6'>
              <label className="block text-sm font-medium text-[#025F4C] mb-1">
                Number of Dependents
              </label>
              <div className="flex items-center justify-between rounded-lg w-full p-3 bg-[#E6F4EA]">
                <button
                  onClick={decrementNumberOfDependents}
                  className={`w-10 h-10 flex items-center justify-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-full ${
                    numberOfDependents > 1 ? 'hover:text-[#3DA647]' : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={numberOfDependents <= 1}
                >
                  <span className="text-2xl">−</span>
                </button>
                <input 
                  type="number" 
                  className='w-60 h-10 mx-2 text-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-lg' 
                  value={Number(numberOfDependents)} 
                  onChange={handleDependentChange}
                  min="1"
                  max="10"
                />
                <button
                  onClick={incrementNumberOfDependents}
                  className={`w-10 h-10 flex items-center justify-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-full ${
                    numberOfDependents < 10 ? 'hover:text-[#3DA647]' : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={numberOfDependents >= 10}
                >
                  <span className="text-2xl">+</span>
                </button>
              </div>
            </div>
          )}

          {/* Total */}
          {selectedPlan && (
            <div className="flex justify-between items-center bg-[#E6F4EA] rounded-lg px-4 py-3">
              <span className="text-[#025F4C] font-medium">Total</span>
              <span className="text-[#3DA647] font-bold">
                ${calculateTotal()} 
                {/* <span className="text-sm text-[#025F4C] ml-1">
                  ({duration} months)
                </span> */}
              </span>
            </div>
          )}

          <button
            onClick={() => {
              if (selectedPlan) {
                const finalPlanData = {
                  id: selectedPlan.id,
                  plan_id: selectedPlan.id,
                  duration_id: selectedPlan.selectedDurationId,
                  name: selectedPlan.name,
                  duration: duration,
                  numberOfDependents: numberOfDependents,
                  total: calculateTotal(),
                  price: selectedPlan.durations.find(d => d.id === selectedPlan.selectedDurationId)?.pivot?.usd_amount || 0,
                  period: selectedPlan.durations.find(d => d.id === selectedPlan.selectedDurationId)?.name || 'month'
                };
                localStorage.setItem('selectedPlan', JSON.stringify(finalPlanData));
                navigate('/sponsor', { state: { plan: finalPlanData } });
                // navigate('/plan-details', { state: { plan: finalPlanData } });
              }
            }}
            disabled={!selectedPlan}
            className={`w-full py-3 rounded-lg font-medium transition-colors text-white text-base ${
              selectedPlan 
                ? 'bg-[#3DA647] hover:bg-[#2C8C35]' 
                : 'bg-[#E6F4EA] text-[#025F4C] cursor-not-allowed'
            }`}
          >
            Next
          </button>
          <p className="text-xs text-center text-[#999] mt-2">
            By continuing, you accept our{' '}
            <Link to="/terms" className="text-[#3DA647] hover:underline">Terms of use</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-[#3DA647] hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChoosePlanPage; 