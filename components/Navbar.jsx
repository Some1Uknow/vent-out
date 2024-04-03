import PostPage from "./PostPage";
import Communities from "./Communities";
import { CgFeed } from "react-icons/cg";
import Help from "./Help";
import { FaHandHoldingHeart } from "react-icons/fa";
import Products from "./Products";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";

const Navbar = ({ setComponent }) => {
  return (
    <div className="flex flex-col justify-start items-start shadow-md rounded-lg py-2 mb-4 bg-white">
      <div className="w-full p-2">
        <button
          onClick={() => setComponent(<PostPage />)}
          className="transition hover:duration-300 hover:bg-gray-300 text-black w-full p-2 bg-transparent font-bold rounded"
        >
          {" "}
          <span className="font-Poppins text-2xl ml-3 flex flex-row justify-start items-center">
            <CgFeed className="mr-2" />
            Posts
          </span>
        </button>
      </div>
      <div className="w-full p-2">
        <button
          onClick={() => setComponent(<Communities />)}
          className="transition hover:duration-300 hover:bg-gray-300 text-black w-full p-2 bg-transparent font-bold py-2 rounded"
        >
          {" "}
          <span className="font-Poppins text-2xl ml-3 flex flex-row justify-start items-center">
            <MdGroups2 className="mr-2" />
            Communities
          </span>
        </button>
      </div>
      <div className="w-full p-2">
        <button
          onClick={() => setComponent(<Help />)}
          className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent w-full p-2 font-bold py-2 rounded"
        >
          {" "}
          <span className="font-Poppins text-2xl ml-3 flex flex-row justify-start items-center">
            <FaHandHoldingHeart className="mr-2" />
            Get Professional Help
          </span>
        </button>
      </div>
      <div className="w-full p-2">
        <button
          onClick={() => setComponent(<Products />)}
          className="transition hover:duration-300 hover:bg-gray-300 text-black bg-transparent w-full p-2 font-bold py-2 rounded"
        >
          {" "}
          <span className="font-Poppins text-2xl ml-3 flex flex-row justify-start items-center">
            <RiShoppingBag2Fill className="mr-2" />
            Merch
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
