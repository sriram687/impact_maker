import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams(); // Extract productId from the route
  const { products, currency,addToCart} = useContext(ShopContext); // Access products from context
  const [productData, setProductData] = useState(false); // State for the selected product
  const [image, setImage] = useState(''); // State for the main product image
  const [size, setSize] = useState('');
  // Fetch product data based on productId
  const fetchProductData = async() => {

   products.map((item)=>{
    if(item._id === productId){
      setProductData(item)
      setImage(item.image[0])
      
      return null;   
    }
   })

  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!productData) {
    return <div className="opacity-0"></div>; // Display nothing if productData is null
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                src={item}  key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" onClick={() => setImage(item)} // Update main image on click
              />
            ))}
          </div>
           <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />

           </div>
        </div>
              {/*--------- product info------------*/}
              <div className='flex-1'>
                  <h1 className='font-medium text-2xl mt-2'>
                    {productData.name}
                  </h1>
                  <div className='flex items-center gap-1  mt-2'>
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                    <p className='pl-2'>(122)</p>
                  </div>
                  <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                  <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

                <div className='flex flex-col gap-4 my-8 '>
                <p>Select Size</p>
                <div className='flex gap-2'>
                  {productData.sizes.map((item,index)=>(
                    <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100  ${ item === size ? 'border-orange-500' :'' }` } key={index}>{item}</button>
                  ))}
                </div>
                </div>
                <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100% Original Product.</p>
                <p>Cash On Delivery is available on this product.</p>
                <p>Easy Return And Exchange within 7 Days.</p>
                </div>
              </div>
      </div>
      {/*------------Description & Review Section------------- */}
      <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Review (122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
            <p>Dedicated to providing stylish, high-quality apparel, this clothing brand empowers individuals to express their unique identities. With a strong focus on sustainability and inclusivity, the collections are designed to be accessible to everyone while being kind to the planet. Discover a diverse range of clothing for every occasion and celebrate fashion that makes a difference.</p>
          
          </div>
      </div>

      {/*----------------- diplay related products--------------------- */}

        <RelatedProducts category={productData.category} SubCategory={productData.subCategory}/>

    </div>
  );
};

export default Product;
