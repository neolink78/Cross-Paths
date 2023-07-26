import { ImCross } from "react-icons/im";
import { BsStarFill, BsHeartFill } from "react-icons/bs";

function Search() {
  return (
    <section className="h-[80vh] mt-[10vh] flex justify-center items-center ">
      <div id="search" className="h-[400px] w-[300px] bg-gray-300 rounded-md">
        <h1 className="p-6 text-xl">Name</h1>
        <div className="flex justify-around h-[297px] items-end py-8">
          <button id="cross" type="button">
            <ImCross />
          </button>
          <button id="star" type="button">
            <BsStarFill />
          </button>
          <button id="heart" type="button">
            <BsHeartFill />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
