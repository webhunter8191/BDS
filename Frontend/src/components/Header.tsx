import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-blue-800 py-6 shadow-md transition duration-500">
      <div className="container mx-auto flex justify-between items-center animate__animated animate__fadeInDown">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            MernHolidays.com
          </Link>
        </span>
        <span className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
            >
              <FaUserCircle className="mr-2" size={20} />
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
