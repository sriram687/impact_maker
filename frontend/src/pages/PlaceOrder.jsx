import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');

  const   {navigate} =useContext(ShopContext);


  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="First Name"
            aria-label="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="email"
          placeholder="Email Address"
          aria-label="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="text"
          placeholder="Street"
          aria-label="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="City"
            aria-label="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="State"
            aria-label="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="number"
            placeholder="Zip Code"
            aria-label="Zip Code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3 w-full"
            type="text"
            placeholder="Country"
            aria-label="Country"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3 w-full"
          type="tel"
          placeholder="Phone Number"
          aria-label="Phone Number"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <h2 className="text-2xl font-bold">Order Summary</h2>
          <CartTotal />
        </div>

        <div className="mt-12">
          {/* Payment Method Title */}
          <Title text1="PAYMENT" text2="METHOD" />

          {/* Payment Method Options */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod('razorpay')}
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer hover:shadow-md ${
                method === 'razorpay' ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay Logo" />
            </div>
            <div
              onClick={() => setMethod('stripe')}
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer hover:shadow-md ${
                method === 'stripe' ? 'border-blue-500 bg-blue-50' : ''
              }`}
            >
              
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe Logo" />
            </div>
            <div
              onClick={() => setMethod('cod')}
              className={`flex items-center gap-3 border p-3 px-4 cursor-pointer hover:shadow-md ${
                method === 'cod' ? 'bg-green-400' : ''
              }`}
            >
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
           <button onClick={()=>navigate('/orders') } className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
