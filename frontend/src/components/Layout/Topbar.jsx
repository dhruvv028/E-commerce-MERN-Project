import React from 'react'
import{ FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
const Topbar = () => {
  return (
    <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
            <div className="hidden md:flex items-center space-x-4">
                <a href="https://github.com/dhruvv028" className="hover:text-gray-300">
                    <FaGithub className="h-4 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/dhruv-gupta-a87353168/" className="hover:text-gray-300">
                    <FaLinkedin className="h-4 w-5" />
                </a>
                <a href="https://www.instagram.com/dhruvv_.2803/" className="hover:text-gray-300">
                    <IoLogoInstagram className="h-5 w-5" />
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span className="italic">Driven by passion, building impactful real-world projects.</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:=1234567890" className="hover:text-gray-300">
                    +91 860460xxxx
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar
