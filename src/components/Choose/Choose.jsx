import React from 'react'
import ideas from '../../assets/images/ideas.png'
import ideas2 from '../../assets/images/ideas2.png'
import choose from '../../assets/images/choose.jpg'

const Choose = () => {
  return (
     <>
     <section className="pt-37.5 pb-26">
       <div className="container">
                 <div className="text-center pb-[50px]">
                <h3 className='font-inter font-bold text-black font-bold text-[45px] pb-[20px] w-[518px] mx-auto'>
                    Why You Should Choose Agenc    
                </h3>
                <p className='font-inter text-[#737373] leading-6.5 text-[16px] w-[802px] pb-[130px] mx-auto'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            
       <div className="flex gap-[80px] items-center">
                    <div className="grid grid-cols-2 gap-25.5 w-[60%]">
               <div className="">
                 <img src={ideas} alt="" />
                   <div className="pt-5">
                      <h2 className='text-[#151515] font-inter font-bold text-6.25 pb-2.5 '>Inovative Ideas</h2>
                      <p className='text[#737373] font-inter font-normal text-4 leading-6.5'>Because each project is different, we adapt to your business model.</p>
                   </div>
                </div>

               <div className="">
                 <img src={ideas} alt="" />
                   <div className=" pt-5">
                      <h2 className='text-[#151515] font-inter font-bold text-6.25 pb-2.5 '>Inovative Ideas</h2>
                      <p className='text[#737373] font-inter font-normal text-4 leading-6.5'>Because each project is different, we adapt to your business model.</p>
                   </div>
                </div> 

               <div className="">
                 <img src={ideas2} alt="" />
                   <div className=" pt-5">
                      <h2 className='text-[#151515] font-inter font-bold text-6.25 pb-2.5 '>Dedicated Support</h2>
                      <p className='text[#737373] font-inter font-normal text-4 leading-6.5'>We provide 24/7 support for all our clients and serve them professionally.</p>
                   </div>
                </div> 

               <div className="">
                 <img src={ideas2} alt="" />
                   <div className=" pt-5">
                      <h2 className='text-[#151515] font-inter font-bold text-6.25 pb-2.5 '>Dedicated Support</h2>
                      <p className='text[#737373] font-inter font-normal text-4 leading-6.5'>We provide 24/7 support for all our clients and serve them professionally.</p>
                   </div>
                </div> 

            </div>
            <div className="w-[40%]">
                <img src={choose} alt="" />
            </div>
          </div>
       </div>
     </section>
     </>
  )
}

export default Choose