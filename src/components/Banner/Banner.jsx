import React from 'react'
import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
import Banner3 from '../../assets/images/banner3.jpg'
import Banner4 from '../../assets/images/banner4.jpg'
import Btn from '../Btn/Btn.jsx'
import Slider from "react-slick";


const Banner = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade: true,
  };
  return (
    <section>
        <Slider {...settings}>
            <div className="banner-items relative">
                <img src={Banner1} alt="" className='w-full max-h-[896px] h-[70vh] max-h-[600px] bg-center bg-no-repeat object-cover'/>
                 <div className="overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0">
                     <div className="content w-[950px] mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className='text-center  text-inter text-[75px] leading-[120%] text-white text-bold pb-12.5'>
                            We Help brands with high quality services
                        </h1>
                        <p className='font-inter pb-13.75 text-white w-[545px] mx-auto font-regular text-[16px] leading-6.5'>
                             There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                        <Btn text='Get Started'/>
                     </div>
                 </div>
            </div>

            <div className="banner-items relative">
                <img src={Banner2} alt="" className='w-full max-h-[896px] h-[70vh] max-h-[600px] bg-center bg-no-repeat object-cover'/>
                 <div className="overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0">
                     <div className="content w-[950px] mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className='text-center  text-inter text-[75px] leading-[120%] text-white text-bold pb-12.5'>
                            We Help brands with high quality services
                        </h1>
                        <p className='font-inter pb-13.75 text-white w-[545px] mx-auto font-regular text-[16px] leading-6.5'>
                             There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                        <Btn text='Get Started'/>
                     </div>
                 </div>
            </div>

            <div className="banner-items relative">
                <img src={Banner3} alt="" className='w-full max-h-[896px] h-[70vh] max-h-[600px] bg-center bg-no-repeat object-cover'/>
                 <div className="overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0">
                     <div className="content w-[950px] mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className='text-center  text-inter text-[75px] leading-[120%] text-white text-bold pb-12.5'>
                            We Help brands with high quality services
                        </h1>
                        <p className='font-inter pb-13.75 text-white w-[545px] mx-auto font-regular text-[16px] leading-6.5'>
                             There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                        <Btn text='Get Started'/>
                     </div>
                 </div>
            </div>

            <div className="banner-items relative">
                <img src={Banner4} alt="" className='w-full max-h-[896px] h-[70vh] max-h-[600px] bg-center bg-no-repeat object-cover'/>
                  <div className="overlay bg-[rgba(0,0,0,0.6)] w-full h-full absolute top-0 left-0">
                     <div className="content w-[950px] mx-auto text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className='text-center  text-inter text-[75px] leading-[120%] text-white text-bold pb-12.5'>
                            We Help brands with high quality services
                        </h1>
                        <p className='font-inter pb-13.75 text-white w-[545px] mx-auto font-regular text-[16px] leading-6.5'>
                             There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                        <Btn text='Get Started'/>
                     </div>
                 </div>
            </div>

        </Slider>
    </section>
  )
}

export default Banner