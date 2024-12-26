import React, { useContext } from 'react'
 import { ShopContext } from '../context/ShopContext';

    
 const CartTotal =() =>{

     const {currency,delivery_fee,getCartAmount}=useContext(ShopContext);
     return (
         <div className='w-full'>
             <div className='text-2x1'>               
                <title text1={'CART'} text2={'TOTALS'} />
             </div>
             <div className='flex flex-col gap-2 mt-2 text-sm'>
                 <div className='flex justify-between'>
                     <p>Subtotal:</p>
                     <p>{currency} {getCartAmount()}.00</p>
                 </div>
                 <hr />
                 <div className='flex justify-between'>                    <p>Shipping Fee:</p>
                     <p>{currency} {delivery_fee}.00</p>
                 </div>
                <hr />
                 <div className='flex justify-between'>
                     <p>Total:</p>
                    <p>{currency} {(getCartAmount() === 0 ? 0 : getCartAmount()+delivery_fee)}</p>
                </div>
                
            </div>
         </div>

     )
 }

export default CartTotal
// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';

// const CartTotal = () => {
//     const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

//     return (
//         <div className="w-full">
//             <div className="text-2xl">
//                 <h1 className="font-bold">CART TOTALS</h1>
//             </div>
//             <div className="flex flex-col gap-2 mt-2 text-sm">
//                 <div className="flex justify-between">
//                     <p>Subtotal:</p>
//                     <p>{currency} {getCartAmount()}.00</p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                     <p>Shipping Fee:</p>
//                     <p>{currency} {delivery_fee}.00</p>
//                 </div>
//                 <hr />
//                 <div className="flex justify-between">
//                     <p>Total:</p>
//                     <p>{currency} {(getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee)}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartTotal;

