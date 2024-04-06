import React from 'react'
import Table from './Table'

export const RightBar = () => {
    return (
        <div className='sm:flex flex-col items-center justify-center gap-3 lg:min-w-0 hidden min-w-[50vw] mt-1'>
                <Table />
       
            <div className='space-y-4 bg-gradient-to-b from-gray-700 mt-8 to-gray-800 w-[80%] p-8 rounded-xl shadow-lg'>
                <h2 className='font-bold text-white'>Written reply to Parliamentary Question on interest rates and late payment fees for loans</h2>
                <p className=' text-gray-400'>Source: MAS, 3 April 2024</p>
                <p className=' text-gray-200'>Interest Rates and Fees: Determined by financial institutions based on market conditions, risks, and lending costs.
Borrower Responsibility: Important for borrowers to understand loan terms, including costs and fees, to ensure affordability.
Disclosure Requirements: MAS mandates clear disclosure of key loan information, including late payment fees and interest charges, to customers. 
<a href="https://www.mas.gov.sg/news/parliamentary-replies/2024/pq-on-interest-rates-and-late-payment-fees-for-loans" className='text-blue-600 underline'> Read more here!</a></p>
            </div>
            <div className='space-y-4  bg-gradient-to-b mb-3 from-gray-700 mt-8 to-gray-800 w-[80%] p-8 rounded-xl shadow-lg'>
                <h2 className='font-bold text-white'>BUDGET 2024</h2>
                <p className=' text-gray-400'>Source: GoBusiness, 21 March 2024</p>
                <p className=' text-gray-200'>The enhanced Enterprise Financing Scheme EFS will support businesses to better access financing by: Extending the EFS-Trade Loan’s enhanced maximum loan quantum of $10 million until
March 2025, at 50% Government risk-share. Extending the EFS-Project Loan for domestic construction projects until March 2025, at a maximum loan quantum of $15 million. Permanently increasing the maximum loan quantum of the EFS-Working Capital Loan to $500,000. <a href="https://www.gobusiness.gov.sg/images/budget2024/MTI%20Business%20Budget%20Booklet%202024_21%20Mar.pdf" className='text-blue-600 underline'> Read more here!</a></p>
            </div>

        </div>
    )
}