import React from 'react'
import work1 from '../../assets/images/work1.jpg'
import work2 from '../../assets/images/work2.png'
import work3 from '../../assets/images/work3.png'
import work4 from '../../assets/images/work4.png'
import work5 from '../../assets/images/work5.png'
import work6 from '../../assets/images/work6.png'


const Work = () => {
  return (
    <>
       <section className="bg-[#F3F3F3] py-37.5 ">
         <div className="container">
            <div className="text-center pb-[50px]">
                <h3 className='font-inter font-bold text-black font-bold text-[45px] pb-[20px]'>
                    Our Recent Work
                </h3>
                <p className='font-inter text-[#737373] leading-6.5 text-[16px] w-[495px] pb-[100px] mx-auto'>
                    There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.
                </p>
            </div>

            <div className="grid grid-cols-3 gap-6 rounded-[20px]  gap-6">
              <div className=' bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work1} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5'>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
            </div>

              <div className='  bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work2} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5  '>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
              </div>

              <div className='  bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work3} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5  '>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
              </div>

              <div className='  bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work4} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5  '>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
              </div>

              <div className='  bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work5} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5  '>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
              </div>
              <div className='  bg-white rounded-[20px]'>
                 <img className='rounded-[20px]' src={work6} alt="" />
              <div className='w-[314px] text-center mx-auto py-7.5  '>
                 <h2 className='pb-2.5 font-inter font-bold text-[#151515] text-[20px] '>
                  Task Management App
                 </h2>
                  <p className='text-[#737373] text-[16px] font-inter font-normal leadind-6.5'>
                   This is a task management application that can help you be more 
                 </p>
               </div>
              </div>

            </div>
         </div>
       </section>
    </>
  )
}

export default Work