import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Email_Verification = () => {
  const [code, setCode] = useState(new Array(5).fill(''));
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Focus the next input field
      if (index < 4 && value) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleResend = () => {
    console.log("Resend email");
  };

  const handleVerify = () => {
    const verificationCode = code.join('');
    console.log("Verify code", verificationCode);
    
    // Check if code is complete
    if (verificationCode.length === 5) {
      // Navigate to the password reset page
      navigate('/pass_reset');
    } else {
      alert('Please enter the complete 5-digit code.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">Check your Email</h2>
        <p className="text-gray-500 mb-6">
          We sent a reset link to <span className="font-medium">contact@dscode...com</span><br />
          Enter the 5-digit code mentioned in the email
        </p>

        {/* Code Input Fields */}
        <div className="flex justify-center gap-2 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-12 text-center text-xl font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-[#2F3645] text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
        >
          Verify Code
        </button>

        {/* Resend Link */}
        <p className="text-gray-500 mt-4">
          Haven’t got the email yet?{' '}
          <button
            onClick={handleResend}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Resend email
          </button>
        </p>
      </div>
    </div>
  );
};

export default Email_Verification;
