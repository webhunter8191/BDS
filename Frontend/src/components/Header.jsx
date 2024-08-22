import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Website Title</h1>
        <div>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/about" className="mx-2">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
