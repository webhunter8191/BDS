import {useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();
  return (
   
      <header className="w-full p-4 flex justify-between items-center bg-white shadow-md z-10 h-[90px]">
        <div className="text-2xl font-bold text-pink-600">
          Brij Divine Stay ❤️
        </div>
        <div>
          <button  className="text-gray-700 mr-4" onClick={()=> navigate("/signup")}>
            Sign up
          </button>
          <button href="#" className="text-gray-700 mr-4" onClick={()=> navigate("/login")}>
            Login
          </button>
        </div>
      </header>
  );
}

export default Header;
