import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import {assets} from '../assets/assets.js'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[350px]' src={assets.about_img} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever: Timeless Fashion, Endless Possibilities discover the perfect blend of style and sophistication with Forever, your ultimate destination for timeless fashion</p>
          <p>At Forever, we believe that great style is forever, and our curated collections are designed to make you look and feel your best, every day.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Forever, our mission is to inspire confidence and self-expression through timeless and accessible fashion. We aim to create a shopping experience that empowers individuals to embrace their unique style while offering high-quality, trend-forward apparel for every moment of life.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>At Forever, quality is at the heart of everything we do. We are dedicated to delivering products that combine style, durability, and comfort, ensuring that every piece you purchase exceeds your expectations.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>At Forever, we’ve designed our shopping experience to fit seamlessly into your lifestyle, making fashion accessible and hassle-free. Whether you're browsing for the latest trends or revisiting your favorites, we’ve ensured every step is smooth, fast, and easy.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we’re not just about fashion; we’re about creating lasting relationships with our customers. Your satisfaction is our top priority, and we go above and beyond to ensure a seamless and delightful shopping experience every step of the way.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About