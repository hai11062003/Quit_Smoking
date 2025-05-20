import React from "react";
import { FaHeart, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='bg-zinc-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* About Section */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>About Quit Smoking</h3>
            <p className='text-sm'>
              Dedicated to helping you break free from smoking addiction. Join
              our community and start your journey to a healthier, smoke-free
              life today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/resources'
                  className='hover:text-white transition-colors'>
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to='/support'
                  className='hover:text-white transition-colors'>
                  Support Groups
                </Link>
              </li>
              <li>
                <Link to='/blog' className='hover:text-white transition-colors'>
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-white transition-colors'>
                  Get Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Connect With Us</h3>
            <div className='flex space-x-4 mb-4'>
              <a href='#' className='hover:text-white transition-colors'>
                <FaFacebook size={24} />
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                <FaTwitter size={24} />
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                <FaInstagram size={24} />
              </a>
            </div>
            <p className='text-sm'>
              Emergency Helpline: <br />
              <span className='font-semibold'>1-800-QUIT-NOW</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-zinc-800 mt-8 pt-8 text-center text-sm'>
          <p>
            Made with <FaHeart className='inline text-red-500' /> for a
            smoke-free future
          </p>
          <p className='mt-2'>
            © {new Date().getFullYear()} Quit Smoking App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
