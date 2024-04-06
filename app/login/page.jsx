
import Login from '@/components/Login';
import React from 'react';
import LinkedInLogin from '@/components/Login';

const LoginPage =()=>{
    return(
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-[#211A1D] via-[#586F7C] to-[#F8F0FB] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login Page</h2>
        </div>
        <LinkedInLogin />
      </div>
    </div>

    );}
export default LoginPage
