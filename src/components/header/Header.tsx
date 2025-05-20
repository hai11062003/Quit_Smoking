import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add auth state

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Add your logout logic here
  };

  return (
    <header className='bg-zinc-900 text-gray-100 sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold'>QuitSmoking</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <Link
              to='/dashboard'
              className='hover:text-gray-300 transition-colors'>
              Dashboard
            </Link>
            <Link
              to='/progress'
              className='hover:text-gray-300 transition-colors'>
              My Progress
            </Link>
            <Link
              to='/resources'
              className='hover:text-gray-300 transition-colors'>
              Resources
            </Link>
            <Link
              to='/community'
              className='hover:text-gray-300 transition-colors'>
              Community
            </Link>
          </nav>

          {/* User Menu */}
          <div className='hidden md:flex items-center space-x-4'>
            {isAuthenticated ? (
              <>
                <Link
                  to='/profile'
                  className='flex items-center space-x-2 hover:text-gray-300 transition-colors'>
                  <FaUser />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className='px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors'>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors'>
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-700 transition-colors'>
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4'>
            <nav className='flex flex-col space-y-4'>
              <Link
                to='/dashboard'
                className='hover:text-gray-300 transition-colors'>
                Dashboard
              </Link>
              <Link
                to='/progress'
                className='hover:text-gray-300 transition-colors'>
                My Progress
              </Link>
              <Link
                to='/resources'
                className='hover:text-gray-300 transition-colors'>
                Resources
              </Link>
              <Link
                to='/community'
                className='hover:text-gray-300 transition-colors'>
                Community
              </Link>
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className='px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors'>
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to='/login'
                    className='px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors inline-block'>
                    Login
                  </Link>
                  <Link
                    to='/signup'
                    className='px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-700 transition-colors inline-block'>
                    Sign Up
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
