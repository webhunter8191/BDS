import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

// Sample list of temple names
const temples = [
  "Prem Mandir",
  "Banke Bihari",
  "Dwarikadish",
  "ISKON",
  "Nidhi Van",
  "Krishna Janmbhoomi",
];

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date | null>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date | null>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (checkIn && checkOut) {
      search.saveSearchValues(
        destination,
        checkIn,
        checkOut,
        adultCount,
        childCount
      );
      navigate("/search");
    } else {
      alert("Please select valid check-in and check-out dates.");
    }
  };

  const handleSelectTemple = (temple: string) => {
    setDestination(temple);
    setShowDropdown(false); // Hide dropdown after selection
  };

  const handleClear = () => {
    setDestination("");
    setCheckIn(null);
    setCheckOut(null);
    setAdultCount(1);
    setChildCount(0);
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="relative p-4 bg-cyan-800 rounded-lg shadow-lg grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 items-center gap-4 animate__animated animate__fadeInUp"
    >
      <div className="relative">
        <div
          className="flex flex-row items-center bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <MdTravelExplore size={25} className="mr-2 text-green-600" />
          <input
            placeholder="Where are you going?"
            className="text-md w-full focus:outline-none placeholder:text-gray-400"
            value={destination}
            readOnly // Make input read-only
            onFocus={() => setShowDropdown(true)} // Show dropdown on focus
          />
        </div>
        {showDropdown && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full mt-1 max-h-60 overflow-y-auto shadow-lg">
            {temples.map((temple) => (
              <li
                key={temple}
                onClick={() => handleSelectTemple(temple)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {temple}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date | null)} // Allow null
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full bg-white p-2 focus:outline-none rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          wrapperClassName="min-w-full"
        />
      </div>

      <div>
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date | null)} // Allow null
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full bg-white p-2 focus:outline-none rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          wrapperClassName="min-w-full"
        />
      </div>

      <div className="flex gap-1">
        <button className="w-2/3 bg-blue-700 text-white h-full p-2 rounded-lg font-bold text-xl hover:bg-blue-600 transition-all duration-300">
          Search
        </button>
        <button
          type="button"
          className="w-1/3 bg-red-700 text-white h-full p-2 rounded-lg font-bold text-xl hover:bg-red-600 transition-all duration-300"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
