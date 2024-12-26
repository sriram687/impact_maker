// import { createContext, useState, useEffect } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import CartTotal from "../components/CartTotal";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '₹';
//     const delivery_fee = 10;

//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false); // Changed to boolean
//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemId, size) => {

//         if(!size){
//             toast.error('Select Product Size');
//             return;
//         }
//         // Clone the cart items object
//         const cartData = structuredClone(cartItems); 
//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = { [size]: 1 };
//         }
//         setCartItems(cartData);
//         console.log(cartData);
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             for (const size in cartItems[itemId]) { // Correct reference
//                 try {
//                     if (cartItems[itemId][size] > 0) {
//                         totalCount += cartItems[itemId][size];
//                     }
//                 } catch (error) {
//                     console.error(error); // Log the error for debugging
//                 }
//             }
//         }
//         return totalCount;
//     };
//     const getCartAmount=()=>{
//         let totalAmount=0;
//         for(const items in cartItems){
//             let itemInfo=products.find((products)=>products.id===items);
//             for(const item in cartItems[items]){
//                 try{
//                     if(cartItems[items][itme]>0)
//                         {
//                         totalAmount+=itemInfo.price*cartItems[items][item];
//                     }
//                 } catch(error){
    
//                 }
//             }
//         }
//         return totalAmount;
//     }
    
    
// const updateQuantity = async(itemId,size,quantity)=>{

//     let cartData = structuredClone(cartItems);
//     if (cartData[itemId] && cartData[itemId][size]) {
//     cartData[itemId][size] = quantity;
//     setCartItems(cartData);
//     }

// }
    

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         getCartCount,
//         updateQuantity,
//         getCartAmount
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;

import { createContext, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;

    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        const cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = { [size]: 1 };
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                if (cartItems[itemId][size] > 0) {
                    totalCount += cartItems[itemId][size];
                }
            }
        }
        return totalCount;
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product.id ===items);
            for (const size in cartItems[items]) {
                try{
                    if (cartItems[items][item] > 0)
                    {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }

                }catch(error){

                }
                   
                }
            
        }
        return totalAmount;
    };
    
    

    const updateQuantity = (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems);
        if (cartData[itemId] && cartData[itemId][size]) {
            cartData[itemId][size] = quantity;
            setCartItems(cartData);
        }
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

