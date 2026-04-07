import React from 'react'
import footer from '../../assets/images/footer.png'

const Footer = () => {
  return (
    <>
     <section className='pt-35'>
        <div className="container">
           <div className="flex gap-32.75">
              <div className="w-[26%]">
                <img src={footer} alt=""  className='pb-7.5'/>
                <p className='font-normal font-inter leading-6.5 text-[#7B7B7B] text-[16px]'>
                    I had a good experience while using this app, what fascinated me was the live tracking feature There are many variations of passages of Lorem Ipsum available, but the majority.
                </p>
            </div>

            <div className="">
                <h1 className='footer-h1'>About</h1>
                <ul className='footer-ul'>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Careers</a></li>
                </ul>
            </div>

            <div className="">
                <h1 className='footer-h1'>Company</h1>
                <ul className='footer-ul'>
                    <li><a href="">Our Team</a></li>
                    <li><a href="">Partner With Us</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
            </div>

            <div className="pb-[50px]">
                <h1 className='footer-h1'>Support</h1>
                <ul className='footer-ul'>
                    <li><a href="">About </a></li>
                    <li><a href="">Support Center</a></li>
                    <li><a href="">Feedback</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Accessibility</a></li>
                </ul>
            </div>

            <div className="">
                <h1 className='footer-h1'>Get in touch</h1>
                <ul className='footer-ul'>
                    <li><a href="">info@gmail.com</a></li>
                    <li><a href="">+88 0121 0212</a></li>
                </ul>
            </div>
           </div>
           <div className="container h-[2px] mx-auto bg-[#E8E8E8]"></div>
           <p className='w-full text-center py-8 text-[#CCCCCC] leading-6.5 text-[16px] font-normal font-inter'>All credit goes to @agence.com</p>
        </div>
     </section>
    </>
  )
}

export default Footer