import React from 'react'
import serv1 from '../../assets/images/serv1.png'
import serv2 from '../../assets/images/serv2.png'
import serv3 from '../../assets/images/serv3.png'
import serv4 from '../../assets/images/serv4.png'
import serv5 from '../../assets/images/serv5.png'
import serv6 from '../../assets/images/serv6.png'

const Service = () => {
  return (
    <>
    <section className=' py-[161px]'>
        <div className="container">
            <div className="service-text text-center pb-[50px]">
                <h3 className='font-inter font-bold text-black font-bold text-[45px] pb-[20px]'>
                    Our Provided Services
                </h3>
                <p className='font-inter text-[#737373] leading-6.5 text-[16px] w-[495px] pb-[50px] mx-auto'>
                    There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.
                </p>
            </div>
            <div className="card flex gap-6 pb-6">
                <div className="card-1  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv1} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            Web Design
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>
                
                <div className="card-2  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv2} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            UI/UX Design
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>

                <div className="card-3  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv3} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            Web Development
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>
            </div>


            <div className="card flex gap-6 pb-6">
                <div className="card-4  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv4} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            Motion Graphics
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>
                
                <div className="card-5  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv5} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            3D Animation
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>

                <div className="card-6  w-[424px]   rounded-[20px]  hover:shadow-[0_0_20px_4px_rgba(0,0,0,0.3)] transition-shadow duration-300">
                    <div className="img items-center justify-center flex">
                    <a href=""> <img src={serv6} alt="" className='py-28 pt-20 pb-10 ' /></a>
                    </div>
                    <div className="card-text w-[326px] text-center mx-auto">
                        <h1 className='font-inter text-[25px] font-bold pb-5'>
                            Digital Marketing
                        </h1>
                        <p className='font-inter leading-6.5 text-[16px] font-[#737373] px-[9px] pb-11.5'>
                            There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Service