import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./ManageHotelForm";

const DetailsSection = () => {
  const {
    register,
    setValue, // Add setValue to update the selected values
    watch, // Use watch to get the selected values for the nearbyTemple
    formState: { errors },
  } = useFormContext<HotelFormData>();

   const nearbyTemples = [
     "Prem Mandir",
     "Banke Bihari",
     "Dwarikadish",
     "ISKON",
     "Nidhi Van",
     "Krishna Janmbhoomi",
   ];
   const nearbyTempleValues = watch("nearbyTemple") || [];
   const handleTempleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { value, checked } = event.target;

     if (checked) {
       // Add the temple if checked
       setValue("nearbyTemple", [...nearbyTempleValues, value]);
     } else {
       // Remove the temple if unchecked
       setValue(
         "nearbyTemple",
         nearbyTempleValues.filter((temple) => temple !== value)
       );
     }
   };


  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Price Per Night
        <input
          type="number"
          min={1}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("pricePerNight", { required: "This field is required" })}
        ></input>
        {errors.pricePerNight && (
          <span className="text-red-500">{errors.pricePerNight.message}</span>
        )}
      </label>
      <div className="text-gray-700 text-sm font-bold max-w-[50%]">
        <span>Nearby Temples</span>
        {nearbyTemples.map((temple) => (
          <label key={temple} className="flex items-center">
            <input
              type="checkbox"
              value={temple}
              checked={nearbyTempleValues.includes(temple)} // Check if the temple is selected
              onChange={handleTempleChange} // Custom change handler
            />
            <span className="ml-2">{temple}</span>
          </label>
        ))}
        {errors.nearbyTemple && (
          <span className="text-red-500">{errors.nearbyTemple.message}</span>
        )}
      </div>
    </div>
  );
};

export default DetailsSection;
