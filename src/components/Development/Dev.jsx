import React from 'react'
import { useState } from 'react'

const Dev = () => {
    const [data, setData] = useState({
        name:'',
        email: '',
        number:'',
    })
    const [errors, setErrors] = useState({});
    const Nregex = /^[a-zA-Z ]{2,50}$/
    const Eregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const bdNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;


    const validation = ()=> {
           const newError = {}

           if(!data.name){
            newError.name = '⚠️Name cannot be empty'
           }else if(!Nregex.test(data.name)){
            newError.name = '⚠️Enter a valid name'
           }

           if(!data.email){
            newError.email = '⚠️Email cannot be empty'
           }else if(!Eregex.test(data.email)){
            newError.email = '⚠️Invalid email format'
           }

           if(!data.number){
            newError.number = '⚠️Number cannot be empty'
           }else if(!bdNumberRegex.test(data.number)){
            newError.number = '⚠️Invalid Number'
           }

         setErrors(newError)
        return Object.keys.newErrors === 0
       
    }

   const handleSubmit = (e) =>{
             e.preventDefault();
         if(!validation()) return

          console.log("Form submitted:", data);
   }


  return (
    <>
     <section className='bg-[#E8E8E8] py-[180px]'>
        <div className="container">
        <form action="#" onSubmit={handleSubmit}>
             <div className='grid grid-cols-2 gap-[158px] items-center'>
           <div className="">
             <h1 className='text-[#151515] font-inter font-bold text-[45px] pb-5 pr-19'>
                We Do design, Code & Development
            </h1>
            <p className='font-inter text-[#7B7B7B] leading-6.5 font-normal text-[16px] pb-2.5 pr-10'>
                I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
            </p>
            <p className='font-inter text-[#7B7B7B] leading-6.5 font-normal text-[16px] pr-10'>
                There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.
            </p>
           </div>
              <div className="bg-white py-15.25 px-10.75 rounded-[20px]">
                <h1 className='font-inter font-bold text-[30px] leading-[100%] text-center pb-7.5'>Get a free quote now</h1>

                <div className="mb-5">
                    <label className=' font-inter font-medium text-[16px] leading-6.5'>Name</label>
                    <input type="text" onChange={(e)=> setData({...data, name: e.target.value})} placeholder='Enter Your Name' className='w-full px-5.75 py-[19px] border rounded-lg outline-none border-[#E8E8E8] focus:ring-2 focus:ring-[#4756DF] mt-2.5' />
                    <strong className='text-red-600 '>{errors.name}</strong>
                </div>

                <div className="mb-5">
                    <label  className=' font-inter font-medium text-[16px] leading-6.5'>Email</label>
                    <input type="text" onChange={(e)=> setData({...data, email: e.target.value})} placeholder='Enter Your Email' className='w-full px-5.75 py-[19px] border rounded-lg outline-none border-[#E8E8E8] focus:ring-2 focus:ring-[#4756DF] mt-2.5' />
                    <strong className='text-red-600 '>{errors.email}</strong>
                </div>

                <div className="mb-5 pb-7.5">
                    <label className=' font-inter font-medium text-[16px] leading-6.5'>Phone</label>
                    <input type="number" onChange={(e)=> setData({...data, number: e.target.value})}  placeholder='Enter Your Number' className='w-full px-5.75 py-[19px] border rounded-lg outline-none border-[#E8E8E8] focus:ring-2 focus:ring-[#4756DF] mt-2.5' />
                    <strong className='text-red-600 '>{errors.number}</strong>
                </div>
                <button type='submmit' className='w-full bg-[#6A4DF4] font-inter font-semibold leadinf-6.5 text-[20px] text-white py-4.75 rounded-[10px] cursor-pointer'>Get Pricing Now</button>
            </div>
         </div>
        </form>
        </div>
     </section>
    </>
  )
}

export default Dev