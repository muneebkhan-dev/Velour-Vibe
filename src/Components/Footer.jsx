import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { MdOutlineMailOutline } from "react-icons/md"

const Footer = () => {
  return (
    <section className='footer relative bg-[rgb(240,240,240)] flex flex-col items-center mt-35 md:mt-22'>
      <div className='footer-cont px-4 md:px-10 lg:px-15 w-full max-w-7xl'>
        <div className='footer-cta bg-black rounded-3xl py-8 md:py-10 px-6 md:px-12 flex flex-col md:flex-row md:justify-between items-center gap-6 md:gap-5 -mt-35 md:-mt-28 lg:-mt-22'>
          <div className='footer-cta__head w-full md:w-1/2'>
            <h1 className='font-dm text-3xl sm:text-3xl lg:text-4xl text-white font-extrabold leading-tight'>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>
          </div>
          <div className='footer-cta__input w-full md:w-auto flex flex-col gap-3 sm:min-w-85'>
            <div className='relative bg-white px-4 py-3 rounded-full w-full flex items-center'>
              <MdOutlineMailOutline className='absolute size-6 left-4 top-1/2 -translate-y-1/2 text-gray-500' />
              <input
                type='email'
                placeholder='Enter your email address'
                className='w-full pl-10 pr-2 outline-none font-dm text-sm sm:text-base text-black placeholder:text-gray-400 placeholder:text-base'
              />
            </div>
            <button className='font-dm text-base font-semibold bg-white text-black py-3 px-6 rounded-full w-full hover:bg-gray-100 transition-colors'>
              Subscribe to Newsletter
            </button>
          </div>
        </div>
        <div className='footer-content pb-10 mx-auto'>
          <div className='flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-4 lg:gap-5 py-10 border-b border-gray-300'>
            <div className='md:w-1/4 flex flex-col gap-4 lg:gap-8'>
              <Link to='/'>
                <h1 className='font-dm font-extrabold text-3xl md:text-2xl lg:text-3xl tracking-tight'>
                  VELOUR.CO
                </h1>
              </Link>
              <p className='font-dm text-sm text-gray-500'>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <ul className='flex gap-4'>
                <li>
                  <FaTwitter className='size-5 md:size-6' />
                </li>
                <li>
                  <FaFacebook className='size-5 md:size-6' />
                </li>
                <li>
                  <FiInstagram className='size-5 md:size-6' />
                </li>
                <li>
                  <FaGithub className='size-5 md:size-6' />
                </li>
              </ul>
            </div>
            <div className="w-full md:w-3/4 grid grid-cols-2 md:grid-cols-4">
              <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center pt-3'>
                <h1 className='font-dm text-base tracking-widest font-semibold'>
                  COMPANY
                </h1>
                <ul className='font-dm text-gray-600 text-sm lg:text-base flex flex-col gap-2 md:gap-4 lg:gap-5'>
                  <li>About</li>
                  <li>Features</li>
                  <li>Works</li>
                  <li>Career</li>
                </ul>
              </div>
              <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center pt-3'>
                <h1 className='font-dm text-base tracking-widest font-semibold'>
                  HELP
                </h1>
                <ul className='font-dm text-gray-600 text-sm lg:text-base flex flex-col gap-2 md:gap-4 lg:gap-5'>
                  <li>Customer Support</li>
                  <li>Delivery Details</li>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center pt-3'>
                <h1 className='font-dm text-base tracking-widest font-semibold'>
                  FAQ
                </h1>
                <ul className='font-dm text-gray-600 text-sm lg:text-base flex flex-col gap-2 md:gap-4 lg:gap-5'>
                  <li>Account</li>
                  <li>Manage Deliveries</li>
                  <li>Orders</li>
                  <li>Payments</li>
                </ul>
              </div>
              <div className='flex flex-col gap-2 md:gap-4 lg:gap-6 justify-center pt-3'>
                <h1 className='font-dm text-base tracking-widest font-semibold'>
                  RESOURCES
                </h1>
                <ul className='font-dm text-gray-600 text-sm lg:text-base flex flex-col gap-2 md:gap-4 lg:gap-5'>
                  <li>Free eBooks</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>Youtube Playlist</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center pt-8 gap-3 md:gap-0'>
            <div>
              <p className='font-dm text-sm md:text-base text-gray-500'>
                Velour.co © 2000-2021, All rights reserved
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-normal items-center">
              <img className="w-3/4 md:w-auto pt-2" src='/src/assets/images/payment-methods.png' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
