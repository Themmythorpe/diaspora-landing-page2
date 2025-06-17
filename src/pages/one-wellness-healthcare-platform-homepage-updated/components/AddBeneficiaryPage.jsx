import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { countries } from '../../../utils/countries';

const API_URL = import.meta.env.VITE_API_URL;
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  phoneCode: '+234', // Default to Nigeria
  address: '',
  state: '',
  lga: '',
  gender: '',
  dateOfBirth: '',
  preExistingCondition: '',
  emergencyContact: '',
  emergencyContactCode: '+234' // Default to Nigeria
};

const VALIDATION_RULES = {
  firstName: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s'-]{2,50}$/,
    message: 'Please enter a valid first name (2-50 characters, letters only)'
  },
  lastName: {
    required: true,
    minLength: 2,
    pattern: /^[a-zA-Z\s'-]{2,50}$/,
    message: 'Please enter a valid last name (2-50 characters, letters only)'
  },
  phoneNumber: {
    required: true,
    pattern: /^[0-9]{6,14}$/,
    message: 'Please enter a valid phone number without country code (e.g., 8012345678)'
  },
  address: {
    required: true,
    minLength: 5,
    maxLength: 100,
    message: 'Please enter a valid address (5-100 characters)'
  },
  state: {
    required: true,
    message: 'Please select a state'
  },
  lga: {
    required: true,
    message: 'Please select an LGA'
  },
  gender: {
    required: true,
    pattern: /^(male|female)$/,
    message: 'Please select a gender'
  },
  dateOfBirth: {
    required: true,
    validate: (value) => {
      const date = new Date(value);
      const now = new Date();
      return date <= now;
    },
    message: 'Please enter a valid date of birth'
  },
  preExistingCondition: {
    required: false,
    maxLength: 200,
    message: 'Pre-existing conditions cannot exceed 200 characters'
  },
  emergencyContact: {
    required: true,
    pattern: /^[0-9]{6,14}$/,
    message: 'Please enter a valid emergency contact number'
  }
};

const PhoneInput = ({ 
  label, 
  name, 
  codeName, 
  value, 
  codeValue, 
  onChange, 
  onCodeChange, 
  placeholder, 
  error 
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-[#025F4C] mb-1">
        {label}
      </label>
      <div className="relative flex">
        <select
          value={codeValue}
          onChange={(e) => onCodeChange(e.target.value)}
          className="absolute inset-y-0 left-0 w-24 pl-3 pr-7 py-3 text-sm bg-[#E6F4EA] border-r border-[#3DA647] rounded-l-lg focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]"
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <input
          type="tel"
          value={value}
          onChange={(e) => {
            // Only allow numbers
            const cleaned = e.target.value.replace(/\D/g, '');
            onChange(cleaned);
          }}
          placeholder={placeholder}
          className={`w-full pl-28 pr-4 py-3 rounded-lg border ${
            error ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'
          } focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
        />
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
};

const BeneficiaryForm = ({ index, onRemove, isRemovable, formData, onChange, errors, states, lgasByState }) => {
  const getFieldError = (field) => {
    return errors[`${field}_${index}`];
  };

  const selectedStateId = formData[`state_${index}`];
  const availableLGAs = lgasByState[selectedStateId] || [];

  return (
    <div className="space-y-6">
      {index == 0 && (
        <div className='flex flex-col justify-between items-start pt-4 mb-5'>
          <img src="/photos/hero_img.png" alt="logo" className='h-8' />
          
          <div className='flex items-center gap-2 mt-8'>
              <span className='text-sm text-[#025F4C]'>Beneficiary {index + 1}</span>
            </div>
        </div>
      )}
      {index > 0 && (
        <div className="border-t border-[#E6F4EA] pt-6 mt-8 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div className='flex items-center gap-2'>
              <span className='text-sm text-[#025F4C]'>Beneficiary {index + 1}</span>
            </div>
            {isRemovable && (
              <button
                onClick={() => onRemove(index)}
                className="text-red-500 flex items-center gap-2 hover:text-red-600"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Remove Beneficiary
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            First Name*
          </label>
          <input
            type="text"
            name={`firstName_${index}`}
            value={formData[`firstName_${index}`] || ''}
            onChange={(e) => onChange(index, 'firstName', e.target.value)}
            placeholder="e.g., John"
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('firstName') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
          />
          {getFieldError('firstName') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('firstName')}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            Last Name*
          </label>
          <input
            type="text"
            name={`lastName_${index}`}
            value={formData[`lastName_${index}`] || ''}
            onChange={(e) => onChange(index, 'lastName', e.target.value)}
            placeholder="e.g., Smith"
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('lastName') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
          />
          {getFieldError('lastName') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('lastName')}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            Date of Birth*
          </label>
          <input
            type="date"
            name={`dateOfBirth_${index}`}
            value={formData[`dateOfBirth_${index}`] || ''}
            onChange={(e) => onChange(index, 'dateOfBirth', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('dateOfBirth') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
          />
          {getFieldError('dateOfBirth') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('dateOfBirth')}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            Gender*
          </label>
          <select
            name={`gender_${index}`}
            value={formData[`gender_${index}`] || ''}
            onChange={(e) => onChange(index, 'gender', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('gender') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {getFieldError('gender') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('gender')}</p>
          )}
        </div>
      </div>

      <PhoneInput
        label="Phone Number*"
        name={`phoneNumber_${index}`}
        codeName={`phoneCode_${index}`}
        value={formData[`phoneNumber_${index}`] || ''}
        codeValue={formData[`phoneCode_${index}`] || '+234'}
        onChange={(value) => onChange(index, 'phoneNumber', value)}
        onCodeChange={(value) => onChange(index, 'phoneCode', value)}
        placeholder="e.g., 8012345678"
        error={getFieldError('phoneNumber')}
      />

      <div>
        <label className="block text-sm font-medium text-[#025F4C] mb-1">
          Address*
        </label>
        <input
          type="text"
          name={`address_${index}`}
          value={formData[`address_${index}`] || ''}
          onChange={(e) => onChange(index, 'address', e.target.value)}
          placeholder="e.g., 123 Main Street, Apt 4B"
          className={`w-full px-4 py-3 rounded-lg border ${getFieldError('address') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
        />
        {getFieldError('address') && (
          <p className="mt-1 text-xs text-red-500">{getFieldError('address')}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            State*
          </label>
          <select
            name={`state_${index}`}
            value={formData[`state_${index}`] || ''}
            onChange={(e) => onChange(index, 'state', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('state') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
          >
            <option value="">Select state</option>
            {states.map(state => (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            ))}
          </select>
          {getFieldError('state') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('state')}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-[#025F4C] mb-1">
            LGA*
          </label>
          <select
            name={`lga_${index}`}
            value={formData[`lga_${index}`] || ''}
            onChange={(e) => onChange(index, 'lga', e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${getFieldError('lga') ? 'border-red-500 bg-red-50' : 'border-[#E6F4EA] bg-[#E6F4EA]'} focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]`}
            disabled={!selectedStateId}
          >
            <option value="">Select LGA</option>
            {availableLGAs.map(lga => (
              <option key={lga.id} value={lga.id}>
                {lga.name}
              </option>
            ))}
          </select>
          {getFieldError('lga') && (
            <p className="mt-1 text-xs text-red-500">{getFieldError('lga')}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#025F4C] mb-1">
          Pre-existing Conditions
        </label>
        <input
          type="text"
          name={`preExistingCondition_${index}`}
          value={formData[`preExistingCondition_${index}`] || ''}
          onChange={(e) => onChange(index, 'preExistingCondition', e.target.value)}
          placeholder="If yes, state condition"
          className="w-full px-4 py-3 rounded-lg border border-[#E6F4EA] bg-[#E6F4EA] focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]"
        />
      </div>

      <PhoneInput
        label="Emergency Contact*"
        name={`emergencyContact_${index}`}
        codeName={`emergencyContactCode_${index}`}
        value={formData[`emergencyContact_${index}`] || ''}
        codeValue={formData[`emergencyContactCode_${index}`] || '+234'}
        onChange={(value) => onChange(index, 'emergencyContact', value)}
        onCodeChange={(value) => onChange(index, 'emergencyContactCode', value)}
        placeholder="e.g., 8012345678"
        error={getFieldError('emergencyContact')}
      />
    </div>
  );
};

const AddBeneficiaryPage = () => {
  const navigate = useNavigate();
  const [beneficiaryCount, setBeneficiaryCount] = useState(1);
  const [beneficiaries, setBeneficiaries] = useState([0]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [states, setStates] = useState([]);
  const [lgasByState, setLgasByState] = useState({});


  useEffect(() => {
    // Load states on component mount
    fetchStates();

    // Get the number of beneficiaries from plan data
    const selectedPlan = localStorage.getItem('selectedPlan');
    if (selectedPlan) {
      try {
        const parsedPlan = JSON.parse(selectedPlan);
        if (parsedPlan.numberOfDependents) {
          const count = parseInt(parsedPlan.numberOfDependents);
          setBeneficiaryCount(count);
          setBeneficiaries(Array.from({ length: count }, (_, i) => i));
        }
      } catch (error) {
        console.error('Error parsing plan data:', error);
      }
    }
  }, [beneficiaryCount]);

  const fetchStates = async () => {
    try {
      const response = await fetch(`${API_URL}/states`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch states');
      }

      const data = await response.json();
      setStates(data.data || []);
    } catch (error) {
      console.error('Error fetching states:', error);
      setErrors(prev => ({ ...prev, states: 'Failed to load states. Please refresh the page.' }));
    }
  };

  const fetchLGAs = async (stateId) => {
    try {
      const response = await fetch(`${API_URL}/states/${stateId}/lgas`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch LGAs');
      }

      const data = await response.json();
      setLgasByState(prev => ({
        ...prev,
        [stateId]: data.data || []
      }));
    } catch (error) {
      console.error('Error fetching LGAs:', error);
      setErrors(prev => ({ ...prev, lgas: 'Failed to load LGAs. Please try again.' }));
    }
  };

  const handleFormChange = async (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      [`${field}_${index}`]: value
    }));

    // Clear error when field is changed
    setErrors(prev => ({
      ...prev,
      [`${field}_${index}`]: ''
    }));

    // If state field is changed, fetch LGAs
    if (field === 'state' && value) {
      await fetchLGAs(value);
      // Clear LGA value when state changes
      setFormData(prev => ({
        ...prev,
        [`lga_${index}`]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    if (!validateForm()) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Get sponsor email from localStorage
      const sponsorData = JSON.parse(localStorage.getItem('sponsorData') || '{}');
      const sponsor_email = sponsorData.email;

      if (!sponsor_email) {
        throw new Error('Sponsor email not found');
      }

      if (beneficiaries.length < beneficiaryCount) {
        alert('You have not reached the maximum number of beneficiaries you selected');
        return;
      }

      // Format beneficiary data according to the required structure
      const beneficiaryData = beneficiaries.map(index => ({
        firstName: formData[`firstName_${index}`],
        lastName: formData[`lastName_${index}`],
        phoneNumber: `${formData[`phoneCode_${index}`]}${formData[`phoneNumber_${index}`]}`,
        address: formData[`address_${index}`],
        dateOfBirth: formData[`dateOfBirth_${index}`],
        gender: formData[`gender_${index}`],
        state: formData[`state_${index}`],
        lga: formData[`lga_${index}`],
        preExistingCondition: formData[`preExistingCondition_${index}`] || 'No condition',
        emergencyContact: formData[`emergencyContact_${index}`],
      }));

      const payload = {
        sponsor_email,
        beneficiaries: beneficiaryData
      };

      // console.log('Submitting data:', payload);

      const response = await fetch(`${API_URL}/add-beneficiary`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add beneficiaries');
      }

      // Show success modal
      // setShowSuccessModal(true);
      
      // Navigate after delay
      setTimeout(() => {
        setShowSuccessModal(false);
        navigate('/beneficiary-success');
      }, 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({
        submit: error.message || 'An error occurred while submitting the form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addBeneficiary = () => {
    if (beneficiaries.length < beneficiaryCount) {
      setBeneficiaries([...beneficiaries, beneficiaryCount]);
      setBeneficiaryCount(beneficiaryCount + 1);
    } else {
      // alert('You have reached the maximum number of beneficiaries');
    }
  };

  const removeBeneficiary = (index) => {
    setBeneficiaries(beneficiaries.filter(i => i !== index));
    
    // Clean up form data and errors for removed beneficiary
    const newFormData = { ...formData };
    const newErrors = { ...errors };
    Object.keys(INITIAL_FORM_STATE).forEach(field => {
      delete newFormData[`${field}_${index}`];
      delete newErrors[`${field}_${index}`];
    });
    setFormData(newFormData);
    setErrors(newErrors);
  };

  const validateField = (field, value, index) => {
    const rule = VALIDATION_RULES[field];
    if (!rule) return '';

    if (rule.required && !value) {
      return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
    }

    if (rule.pattern && !rule.pattern.test(value)) {
      return rule.message;
    }

    if (rule.minLength && value.length < rule.minLength) {
      return rule.message;
    }

    if (rule.validate && !rule.validate(value)) {
      return rule.message;
    }

    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    beneficiaries.forEach(index => {
      Object.keys(VALIDATION_RULES).forEach(field => {
        const value = formData[`${field}_${index}`];
        const error = validateField(field, value, index);
        if (error) {
          newErrors[`${field}_${index}`] = error;
          isValid = false;
        }
      });
    });

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="min-h-screen bg-[#025F4C] pt-12 md:pb-16">
      <div className="container mx-auto md:px-4 max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white ml-4 md:ml-0 mt-16 mb-4 md:mb-8">Add Beneficiary</h1>
        
        {errors.submit && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
            <span className="block sm:inline">{errors.submit}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="md:rounded-2xl py-8 px-4 md:px-8 bg-white shadow-lg">
          {beneficiaries.map((index) => (
            <BeneficiaryForm
              key={index}
              index={index}
              onRemove={removeBeneficiary}
              isRemovable={beneficiaries.length > 1}
              formData={formData}
              onChange={handleFormChange}
              errors={errors}
              states={states}
              lgasByState={lgasByState}
            />
          ))}

          <div className="mt-8">
            <button
              type="button"
              onClick={addBeneficiary}
              disabled={beneficiaries.length >= 10}
              className={`flex items-center gap-2 text-[#3DA647] text-sm font-medium ${
                beneficiaries.length == beneficiaryCount ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#218838]'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Beneficiary {beneficiaries.length == beneficiaryCount && `(Max ${beneficiaryCount})`}
            </button>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-[#3DA647] text-white py-3 rounded-lg font-medium transition-colors ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#218838]'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            <p className="text-sm text-center text-[#025F4C] mt-4">
              By continuing, you accept our{' '}
              <Link to="/terms" className="text-[#3DA647] hover:underline">Terms of use</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-[#3DA647] hover:underline">Privacy Policy</Link>
            </p>
          </div>
        </form>
      </div>

      {/* Success Modal */}
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
                Beneficiary Details Added Successfully
              </h3>
              <p className="text-[#025F4C]">
                Your beneficiary information has been saved.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBeneficiaryPage; 