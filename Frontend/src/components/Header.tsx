import { NavLink, useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";
import { FaUserCircle, FaSearch } from "react-icons/fa";
import Swal from "sweetalert2";

const Header = () => {
  const { isLoggedIn, isAdmin } = useAppContext();
  const navigate = useNavigate();

  // Function to handle search button click
  const handleSearchClick = () => {
    if (isLoggedIn) {
      navigate("/search"); // Navigate to search page if logged in
    } else {
      // Show alert if user is not logged in
      Swal.fire({
        icon: "warning",
        title: "Please log in first",
        text: "You need to be logged in to use the search feature.",
        confirmButtonText: "OK",
        confirmButtonColor: "#6A4A3C",
        customClass: {
          popup: "alert-popup",
        },
      });
    }
  };

  return (
    <div className="bg-white py-6 shadow-md transition duration-500">
      <div className="container mx-auto flex justify-between items-center animate__animated animate__fadeInDown">
        {/* Site Logo */}
        <span className="text-3xl text-black font-bold tracking-tight">
          <NavLink
            to="/"
            className="hover:text-gray-300 transition duration-300"
          >
            Brij Divine Stay
          </NavLink>
        </span>

        {/* Navigation Links and Actions */}
        <span className="flex items-center space-x-4">
          {/* Always Visible Links */}
          <button
            onClick={handleSearchClick}
            className="flex items-center bg-[#5B3B3B] text-white px-4 py-2 rounded-lg hover:bg-[#4A2D2D] transition duration-300"
          >
            <FaSearch className="mr-2" size={18} />
            Search
          </button>

          {isLoggedIn ? (
            <>
              {!isAdmin ? (
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                      isActive ? "bg-[#3B4A5B]" : "bg-[#4A5B6A]"
                    } text-white hover:bg-[#374257]`
                  }
                  to="/my-bookings"
                >
                  My Bookings
                </NavLink>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 rounded-lg transition duration-300 ${
                      isActive ? "bg-[#6A4A3C]" : "bg-[#7C5C4A]"
                    } text-white hover:bg-[#5C3E32]`
                  }
                  to="/my-hotels"
                >
                  My Hotels
                </NavLink>
              )}
              <SignOutButton />
            </>
          ) : (
            <NavLink
              to="/sign-in"
              className="flex items-center bg-[#4A3B5B] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#372D4A] transition duration-300"
            >
              <FaUserCircle className="mr-2" size={20} />
              Sign In
            </NavLink>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
