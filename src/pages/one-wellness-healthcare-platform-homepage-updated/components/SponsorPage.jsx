import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const API_URL = process.env.VITE_API_URL;

const SponsorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    community_code: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'));
      
      const payload = {
        name: formData.name,
        email: formData.email,
        community_code: formData.community_code,
        is_active: true,
        // plan_id: selectedPlan?.id || null,
        // duration_id: selectedPlan?.selectedDurationId || null,
        // diaspora: true
      };

      // console.log('API URL:', API_URL);
      // console.log('Sending payload:', payload);

      const response = await fetch(`${API_URL}/sponsor`, {
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

      // console.log('Sponsor Response:', data);

      if (!response.ok) {
        throw new Error(data?.message || `Request failed with status ${response.status}`);
      }

      if (response.ok) {
        localStorage.setItem('sponsorData', JSON.stringify(data.data));
        setTimeout(() => {
          navigate('/sponsor-success');
        }, 1000);
      } else {
        throw new Error(data?.message || 'Failed to register sponsor');
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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#025F4C] pt-12 md:pb-16">
      <div className="container mx-auto md:px-4 max-w-xl">
        <h1 className="text-2xl md:text-3xl font-bold text-white ml-4 md:ml-0 mt-16 mb-4 md:mb-8">Sponsor Registration</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4 mx-4 md:mx-0" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <div className="md:rounded-2xl py-8 px-4 md:px-8 bg-white shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div className='flex justify-start items-center pt-3 mb-4'>
                <img src="/photos/hero_img.png" alt="logo" className='h-8' />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#025F4C] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-[#E6F4EA] bg-[#E6F4EA] focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#025F4C] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-[#E6F4EA] bg-[#E6F4EA] focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#025F4C] mb-1">
                  Community Code
                </label>
                <input
                  type="text"
                  name="community_code"
                  required
                  value={formData.community_code}
                  onChange={handleChange}
                  placeholder="Enter community code"
                  className="w-full px-4 py-3 rounded-lg border border-[#E6F4EA] bg-[#E6F4EA] focus:ring-2 focus:ring-[#3DA647] focus:border-transparent text-[#025F4C]"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-[#3DA647] text-white py-3 rounded-lg font-medium transition-colors ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#218838]'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorPage; 