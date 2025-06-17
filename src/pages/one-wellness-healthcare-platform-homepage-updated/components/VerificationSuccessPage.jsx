import React from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#025F4C] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl py-8 px-4 md:p-8 max-w-md w-full mx-auto text-center shadow-lg">
        <div className="mb-6">
            <div className="mx-auto w-fit">
                <img src="/images/check_icon.png" alt="Check" className="w-20 h-20" />
            </div>
          <h2 className="text-xl font-semibold text-[#025F4C] mb-3">
            Beneficiary Submitted!
          </h2>
          <p className="text-[#025F4C] text-sm mb-8">
          Your beneficiary has been added successfully
          </p>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full bg-[#3DA647] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2C8C35] transition-colors"
        >
         Go Home
        </button>
      </div>
    </div>
  );
};

export default VerificationSuccessPage; 