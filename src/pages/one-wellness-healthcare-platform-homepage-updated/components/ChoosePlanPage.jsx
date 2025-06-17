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
    // Get default duration based on plan
    const defaultDuration = plan.id === 40 ? 6 : 2;
    const defaultDurationId = plan.durations.find(d => 
      d.num_days === (defaultDuration === 6 ? 182 : 60)
    )?.id;

    const newPlan = {
      ...plan,
      duration: defaultDuration,
      numberOfDependents: 1,
      selectedDurationId: defaultDurationId
    };
    
    setSelectedPlan(newPlan);
    setDuration(defaultDuration);
    setNumberOfDependents(1);
    
    // Save to localStorage
    const planData = {
      id: plan.id,
      name: plan.name,
      duration: defaultDuration,
      numberOfDependents: 1,
      selectedDurationId: defaultDurationId,
      price: plan.durations.find(d => d.id === defaultDurationId)?.pivot?.usd_amount || 0,
      period: plan.durations.find(d => d.id === defaultDurationId)?.name || 'month',
      total: plan.durations.find(d => d.id === defaultDurationId)?.pivot?.usd_amount || 0
    };
    localStorage.setItem('selectedPlan', JSON.stringify(planData));
  };

  const incrementDuration = () => {
    if (!selectedPlan) return;
    
    const availableDurations = selectedPlan.durations.map(d => d.num_days === 365 ? 12 : d.num_days === 182 ? 6 : 2).sort((a, b) => a - b);
    const nextDuration = availableDurations.find(d => d > duration);
    
    if (nextDuration) {
      const nextDurationId = selectedPlan.durations.find(d => 
        d.num_days === (nextDuration === 12 ? 365 : nextDuration === 6 ? 182 : 60)
      )?.id;

      setDuration(nextDuration);
      setSelectedPlan(prev => ({
        ...prev,
        duration: nextDuration,
        selectedDurationId: nextDurationId
      }));
      updateLocalStorage({ 
        duration: nextDuration,
        selectedDurationId: nextDurationId,
        price: selectedPlan.durations.find(d => d.id === nextDurationId)?.pivot?.usd_amount || 0
      });
    }
  };

  const decrementDuration = () => {
    if (!selectedPlan) return;
    
    const availableDurations = selectedPlan.durations.map(d => d.num_days === 365 ? 12 : d.num_days === 182 ? 6 : 2).sort((a, b) => a - b);
    const prevDuration = [...availableDurations].reverse().find(d => d < duration);
    
    if (prevDuration) {
      const prevDurationId = selectedPlan.durations.find(d => 
        d.num_days === (prevDuration === 12 ? 365 : prevDuration === 6 ? 182 : 60)
      )?.id;

      setDuration(prevDuration);
      setSelectedPlan(prev => ({
        ...prev,
        duration: prevDuration,
        selectedDurationId: prevDurationId
      }));
      updateLocalStorage({ 
        duration: prevDuration,
        selectedDurationId: prevDurationId,
        price: selectedPlan.durations.find(d => d.id === prevDurationId)?.pivot?.usd_amount || 0
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
                    duration > (selectedPlan.id === 40 ? 6 : 2) ? 'hover:text-[#3DA647]' : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!selectedPlan.durations.some(d => (d.num_days === 365 ? 12 : d.num_days === 182 ? 6 : 2) < duration)}
                >
                  <span className="text-2xl">−</span>
                </button>
                <span className="text-lg font-bold text-[#025F4C] px-2">{duration} Months</span>
                <button
                  onClick={incrementDuration}
                  className={`w-10 h-10 flex items-center justify-center text-[#025F4C] focus:outline-none bg-white border border-[#E6F4EA] rounded-full ${
                    duration < (selectedPlan.id === 40 ? 12 : 6) ? 'hover:text-[#3DA647]' : 'opacity-50 cursor-not-allowed'
                  }`}
                  disabled={!selectedPlan.durations.some(d => (d.num_days === 365 ? 12 : d.num_days === 182 ? 6 : 2) > duration)}
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
                <span className="text-sm text-[#025F4C] ml-1">
                  ({duration} months)
                </span>
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