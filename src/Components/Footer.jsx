import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <section className='relative bg-[#F0F0F0] flex items-center'>
      <div className='max-w-7xl px-15 py-10 mx-auto'>
        <div className="flex justify-between gap-5 items-center py-10 border-b border-gray-300">
          <div className="w-1/4 flex flex-col gap-8">
            <Link to='/'>
              <h1 className='font-dm font-extrabold text-3xl tracking-tight'>
                VELOUR.CO
              </h1>
            </Link>
            <p className="font-dm text-sm text-gray-500">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className='flex gap-4'>
              <li>
                <FaTwitter className='size-6' />
              </li>
              <li>
                <FaFacebook className='size-6' />
              </li>
              <li>
                <FiInstagram className='size-6' />
              </li>
              <li>
                <FaGithub className='size-6' />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 justify-center pt-3">
            <h1 className="font-dm text-base tracking-widest font-semibold">COMPANY</h1>
            <ul className="font-dm text-gray-600 text-base flex flex-col gap-5">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 justify-center pt-3">
            <h1 className="font-dm text-base tracking-widest font-semibold">HELP</h1>
            <ul className="font-dm text-gray-600 text-base flex flex-col gap-5">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 justify-center pt-3">
            <h1 className="font-dm text-base tracking-widest font-semibold">FAQ</h1>
            <ul className="font-dm text-gray-600 text-base flex flex-col gap-5">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 justify-center pt-3">
            <h1 className="font-dm text-base tracking-widest font-semibold">RESOURCES</h1>
            <ul className="font-dm text-gray-600 text-base flex flex-col gap-5">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between pt-10">
          <div>
            <p className="font-dm text-sm text-gray-500">Velour.co © 2000-2021, All rights reserved</p>
          </div>
          <div>
            <img src="/src/assets/images/payment-methods.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
