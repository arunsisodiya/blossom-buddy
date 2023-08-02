import { useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import PropTypes from 'prop-types';

const Search = ({ onSearch }) => {
  const [, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleChange = (event) => {
    if (event.key === "Enter") {
      setSearchText(event.target.value);
      onSearch(event.target.value);
    }
  };

  const handleClick = () => {
    setSearchText(inputRef.current.value);
    onSearch(inputRef.current.value);
  };

  return (
    <>
      <br></br>
      <div className="flex justify-center items-center m-14">
        <div className="container mx-auto bg-sky-500 rounded-lg p-14">
          <h1 className="text-center font-normal font-arapey italic text-white text-4xl">
            Find the perfect plants for your Home 🏡
          </h1>
          <p className="mx-auto font-normal text-sm my-6 max-w-lg"></p>
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              ref={inputRef}
              className="text-base text-gray-400 flex-grow outline-none px-2 "
              type="text"
              placeholder="Type the plant name you are looking for..."
              onKeyDown={handleChange}
            />
            <div className="rounded-full ms:flex items-center px-2 space-x-4 mx-auto ">
              <Button
                variant="gradient"
                className=" bg-sky-500 text-white text-base rounded-lg px-4 py-2 font-normal normal-case"
                onClick={handleClick}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
