import "./style/PlantsInfo.css";
import PropTypes from 'prop-types';

const PlantInfo = ({ data }) => {
  return (
    <>
    <div className="p-8 h-56 grid grid-cols-3 gap-14 select-none justify-center w-auto">
    {data && data.map((item) => (
      console.log(item),
      <div className="w-auto transform hover:-translate-y-10 transition duration-300 cursor-pointer rounded-lg drop-shadow-lg shadow-md shadow-gray-200 hover:shadow-sky-400/80 hover:shadow-2xl hover:bg-gray-50">
        <img className="object-cover aspect-video bg-cover w-full rounded-t-md min-h-40" src={item.image_url} alt={item.common_name} />
        <div className="p-4 text-left">
          <span className="text-sky-500 font-normal text-base font-poppins">
            Plant Information
          </span>
          <p className="font-semibold font-poppins text-xl py-2">{item.common_name}</p>
          <div className="flex flex-wrap space-x-24 py-2 justify-between">
            <p className="font-normal font-poppins text-s ">Family</p>
            <p className="font-thin font-montserrat text-s text-sky-500 whitespace-pre-wrap text-right">{item.family}</p>
        </div>
        <div className="flex flex-wrap space-x-24 py-2 justify-between">
            <p className="font-normal font-poppins text-s whitespace-pre">Family Name</p>
            <p className="font-thin font-montserrat text-s text-sky-500 whitespace-pre-wrap">{item.family_common_name || "None"}</p>
        </div>
        <div className="flex space-x-10 py-2 justify-around text-right">
            <p className="font-normal font-poppins text-s whitespace-pre">Scientific Name</p>
            <p className="font-thin font-montserrat text-s text-sky-500 whitespace-pre-wrap">{item.scientific_name || "None"}</p>
        </div>
        </div>
        <div className="flex flex-wrap mt-10 space-x-24 mx-4 mb-2 align-bottom text-right justify-between">
          <p className="font-normal font-poppins text-s ">Year</p>
          <p className="font-thin font-montserrat text-s text-sky-500 text-right justify-between">{item.year}</p>
        </div>
      </div>
      ))}
    </div>
    </>
  );
}
PlantInfo.propTypes = {
  data: PropTypes.array.isRequired
};

export default PlantInfo;
