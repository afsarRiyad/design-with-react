import React from 'react'
import App from './../../App';
import { useEffect, useState } from 'react';

const Success = () => {

     const [cus, setCus] = useState(0);
  const [rate, setRate] = useState(0)
  const [proj, setProj] = useState(0)
  
 
    useEffect(() => {
        const interval = setInterval(() => {
            setCus(prev => {
                if (prev === 200){
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            })
        },20 )
        return () => clearInterval(interval);
    }, []);

   useEffect(() => {
    const interval = setInterval(() =>{
        setRate (prev=>{
            if(prev ===4.5){
                clearInterval(interval);
                return prev;
            }
            return +(prev +0.1).toFixed(1)
        })
    }, 90)
   return () => clearInterval(interval)
   },[]);

    useEffect(() =>{
       const interval = setInterval(()=>{
          setProj(prev=>{
            if(prev === 351){
               clearInterval(interval)
             return prev;
            }
            return prev + 1
          })
       }, 12)
       return () => clearInterval(interval)
    },[]);
  
  return (
    <>
    <section className='pt-42.75'>
        <div className="container">
            <div className="items flex gap-[124px] items-center bg-[#E0FFF9] rounded-[20px]">
                <div className="w-[33%] pt-[98px] pb-[73px] pl-[33px]">
                    <h3 className='text-[#6A4DF4] leading-[120%] font-inter font-medium text-[25px]'>Our Success</h3>
                    <p className='pt-3.5 text-[#151515] text-[35px] font-inter font-semibold '>West cost Brand makers-Global Edge</p>
                </div>
                <div className="grid grid-cols-3 gap-[110px]">
                    <div className="">
                        <h2 className='font-bold font-inter text-[50px]  text-[#151515]'>
                            {cus}+
                        </h2>
                        <p className='font-inter font-medium text-[20px] leading-[120%] text-[#737373]'>Customer Satisfied</p>
                    </div>

                    <div className="">
                        <h2 className='font-bold font-inter text-[50px]  text-[#151515]'>
                            {rate}
                        </h2>
                        <p className='font-inter font-medium text-[20px] leading-[120%] text-[#737373]'>200+ Avg rating</p>
                    </div>

                    <div className="">
                        <h2 className='font-bold font-inter text-[50px]  text-[#151515]'>
                            {proj}+
                        </h2>
                        <p className='font-inter font-medium text-[20px] leading-[120%] text-[#737373]'>Project Delivered</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Success