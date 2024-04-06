import React from 'react';

const LoginPage =()=>{
    return(
      <div className="bg-[#5d9ae9] transition-colors duration-1000 ease-in-out hover:bg-[#4547c1] min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">  
    <div class="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-xl bg-white shadow-xl">
                <div class="p-6 sm:p-16">
                    <div class="space-y-4">
                        <img src="Icons.png" loading="lazy" class="w-20"/>
                        <h2 class="mb-8 text-2xl text-cyan-900 font-bold">Sign in to unlock the <br/> best of OnePercent.</h2>
                    </div>
                    <div class="mt-16 grid space-y-4">
                        <button class="group h-14 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                            <div class="relative flex items-center space-x-4 justify-center">
                                <img src="download.png" class=" left-0 w-5"/>
                                <span class="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with LinkedLn</span>
                            </div>
                        </button>      
                    </div>
                    <div class="mt-32 space-y-4 text-gray-600 text-center sm:-mb-8">
                        <p class="text-xs">By proceeding, you agree to our <a href="#" class="underline">Terms of Use</a> and confirm you have read our <a href="#" class="underline">Privacy and Cookie Statement</a>.</p>
                        <p class="text-xs">This site is protected by reCAPTCHA and the <a href="#" class="underline">Google Privacy Policy</a> and <a href="#" class="underline">Terms of Service</a> apply.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    
    );}
export default LoginPage
