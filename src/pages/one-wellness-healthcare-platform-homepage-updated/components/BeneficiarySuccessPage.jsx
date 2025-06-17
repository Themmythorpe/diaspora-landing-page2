import React from 'react';
import { Link } from 'react-router-dom';

const BeneficiarySuccessPage = () => {
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
            Beneficiary Details Added Successfully!
          </h1>
          
          <p className="text-[#025F4C] mb-8">
            Thank you for providing the beneficiary information. Your healthcare journey with us begins now.
          </p>
          
          <Link
            to="/"
            className="inline-block bg-[#3DA647] text-white py-3 px-8 rounded-lg font-medium hover:bg-[#218838] transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BeneficiarySuccessPage; 