"use client"

import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.username) newErrors.username = "Username is required";
    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone number is required";
    if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!validatePhoneNumber(formData.phoneNumber)) newErrors.phoneNumber = "Phone number must be 10 digits";
    if (!formData.password) newErrors.password = "Password is required";
    if (!validatePassword(formData.password)) newErrors.password = "Password must be at least 8 characters long";
    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm password is required";
    if (!passwordsMatch()) newErrors.confirmPassword = "Passwords do not match";
    return newErrors;
  };

  const handleNext = () => {
    let validationErrors = {};
    if (step === 1) validationErrors = validateStep1();
    if (step === 2) validationErrors = validateStep2();

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <img className="" src="pineconelogo.png" alt="Logo" />
        {step !== 4 && (
          <>
            <h1 className="text-2xl font-bold mb-4 text-gray-700"> 
              Join Us :3 😎 - Step {step} of 4 
            </h1>
            <p className="text-gray-700 mb-6">
              Please provide all current information accurately.
            </p>
          </>
        )}
        {step === 1 && (
          <StepOne
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        )}

        {step === 2 && (
          <StepTwo
            formData={formData}
            errors={errors} 
            handleChange={handleChange}
            setStep={setStep}
            handleBack={handleBack}
          />
        )}

        {step === 3 && (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            handleFileChange={handleFileChange}
            handleBack={handleBack}
            setStep={setStep}
          />
        )}
        {step === 4 && (
          <StepFour formData={formData} />
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;