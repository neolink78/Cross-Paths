import { ImCross } from "react-icons/im";
import { BsStarFill, BsHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import * as Services from "../services/People.service";

function Search() {
  const [nextPage, setNextPage] = useState(0);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    Services.getPeople().then((res) => {
      setPeople(res);
    });
  }, []);

  return (
    <section className="h-[80vh] mt-[10vh] flex justify-center items-center ">
      {people !== null && people.length > nextPage ? (
        <div id="search" className="h-[400px] w-[300px] bg-gray-300 rounded-md">
          {/* cette div représente une personne */}
          <h1 className="p-6 text-xl">{people[nextPage].name}</h1>
          <p>{people[nextPage].description}</p>
          <div className="flex justify-around h-[297px] items-end py-8">
            <button
              id="cross"
              type="button"
              onClick={() => setNextPage(nextPage + 1)}
            >
              <ImCross />
            </button>
            <button
              id="star"
              type="button"
              onClick={() => setNextPage(nextPage + 1)}
            >
              <BsStarFill />
            </button>
            <button
              id="heart"
              type="button"
              onClick={() => setNextPage(nextPage + 1)}
            >
              <BsHeartFill />
            </button>
          </div>
        </div>
      ) : (
        "ya plus rien !"
      )}
    </section>
  );
}

export default Search;
