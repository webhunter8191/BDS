import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaUserCircle, FaHeart } from "react-icons/fa";

const Header = () => {
  const { isLoggedIn ,isAdmin} = useAppContext();

  return (
    <header className="bg-gradient-to-r from-sky-400 to-sky-500 py-6 shadow-lg transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 animate-fadeIn">
        <div className="text-3xl text-white font-bold tracking-wider animate-slideInLeft">
          <Link
            to="/"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <img
              src="/images/flute-bg.png"
              alt="Krishna Logo"
              height={20}
              width={250}
            />
          </Link>
          {/* Radhey Radhey Text */}

          <p className="text-3xl font-rubik font-extrabold text-heading mt-2 animate__animated animate__fadeInDown">
            <div className="flex gap-3">
              <span className="font-cursive">
                Radhey Radhey 
              </span>
              <FaHeart fill="red" />
            </div>
          </p>
        </div>

        <nav className="flex items-center space-x-6">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-out"
              >
                My Bookings
              </Link>
          
              {isAdmin && <Link
                to="/my-hotels"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-out"
              >
                My Hotels
              </Link>
              }

              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-out"
            >
              <FaUserCircle className="mr-2" size={20} />
              Sign In
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
