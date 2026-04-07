import React, { useState } from 'react'
import rev from '../../assets/images/rev.png'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 right-5 z-10 cursor-pointer -translate-y-1/2 bg-[#4756DF] text-white p-2 rounded rounded-[20px] text-sm"
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 left-0.5 z-10 cursor-pointer -translate-y-1/2 bg-[#4756DF] text-white p-2 rounded rounded-[20px] text-sm"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
}

const Reviews = () => {
  const [activeSlide, setActiveSlide] = useState(0);

const settings = {
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows : true,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
};
  return (
    <>
     <section className='pb-40'>
        <div className="container">
            <h3 className='font-inter  text-black font-bold text-[45px] text-center pb-[150px]'>
                   Some Client Reviews
                </h3>

              <Slider  {...settings} className="overflow-hidden">
                
                <div className='relative review-card min-h-[500px] px-4'>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-9 text-[#E3DDFB] text-[58px]'/>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-[72px] text-[#E3DDFB] text-[58px]'/>
                    <div className="txt px-12.5 pt-[113px]">
                        <p className='font-inter font-normal text-4 leading-6.5 pb-5 pr-3 text-[#7B7B7B]'>
                            I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                        </p>
                        <div className="flex gap-1.25 pb-7.5">
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                        </div>
                        <div className="flex gap-5 pb-17.75">
                            <img src={rev} alt="" />
                            <div>
                                <h2 className='font-inter font-semibold leading-[120%] text-[20px] text-[#232323]'>
                                    Eric Drake
                                </h2>
                                <p className='font-inter text-[#7B7B7B] text-[16px] leading-6.5 font-normal'>
                                    Digital Marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative review-card min-h-[500px] px-4'>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-9 text-[#E3DDFB] text-[58px]'/>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-[72px] text-[#E3DDFB] text-[58px]'/>
                    <div className="txt px-12.5 pt-[113px]">
                        <p className='font-inter font-normal text-4 leading-6.5 pb-5 pr-3 text-[#7B7B7B]'>
                            I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                        </p>
                        <div className="flex gap-1.25 pb-7.5">
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                        </div>
                        <div className="flex gap-5 pb-17.75">
                            <img src={rev} alt="" />
                            <div>
                                <h2 className='font-inter font-semibold leading-[120%] text-[20px] text-[#232323]'>
                                    Eric Drake
                                </h2>
                                <p className='font-inter text-[#7B7B7B] text-[16px] leading-6.5 font-normal'>
                                    Digital Marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative review-card min-h-[500px] px-4'>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-9 text-[#E3DDFB] text-[58px]'/>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-[72px] text-[#E3DDFB] text-[58px]'/>
                    <div className="txt px-12.5 pt-[113px]">
                        <p className='font-inter font-normal text-4 leading-6.5 pb-5 pr-3 text-[#7B7B7B]'>
                            I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                        </p>
                        <div className="flex gap-1.25 pb-7.5">
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                        </div>
                        <div className="flex gap-5 pb-17.75">
                            <img src={rev} alt="" />
                            <div>
                                <h2 className='font-inter font-semibold leading-[120%] text-[20px] text-[#232323]'>
                                    Eric Drake
                                </h2>
                                <p className='font-inter text-[#7B7B7B] text-[16px] leading-6.5 font-normal'>
                                    Digital Marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='relative review-card min-h-[500px] px-4'>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-9 text-[#E3DDFB] text-[58px]'/>
                    <BiSolidQuoteSingleLeft className='absolute top-12.5 left-[72px] text-[#E3DDFB] text-[58px]'/>
                    <div className="txt px-12.5 pt-[113px]">
                        <p className='font-inter font-normal text-4 leading-6.5 pb-5 pr-3 text-[#7B7B7B]'>
                            I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                        </p>
                        <div className="flex gap-1.25 pb-7.5">
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                            <FaStar className='text-[#F9BD2C]'/>
                        </div>
                        <div className="flex gap-5 pb-17.75">
                            <img src={rev} alt="" />
                            <div>
                                <h2 className='font-inter font-semibold leading-[120%] text-[20px] text-[#232323]'>
                                    Eric Drake
                                </h2>
                                <p className='font-inter text-[#7B7B7B] text-[16px] leading-6.5 font-normal'>
                                    Digital Marketing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>   
              </Slider>
        </div>
     </section>
    </>
  )
}

export default Reviews