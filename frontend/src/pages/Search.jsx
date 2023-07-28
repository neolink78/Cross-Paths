import { ImCross } from "react-icons/im";
import { BsStarFill, BsHeartFill } from "react-icons/bs";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";
import { useEffect, useState } from "react";
import * as Services from "../services/People.service";

export default function Search({ selectedCategory }) {
  const [nextPage, setNextPage] = useState(0);
  const [people, setPeople] = useState(null);

  useEffect(() => {
    selectedCategory === "à la recherche de l'amour" && Services.getPeople().then((res) => {
      setPeople(res);
    });
  }, []);

  return (
    <>
        <h1>à redisposer {selectedCategory}</h1>
      <section className="h-[80vh] mt-[10vh] flex justify-center items-center ">
        {people !== null && people.length > nextPage ? (
          <div
            id="search"
            className="h-[400px] w-[300px] bg-gray-300 rounded-md"
          >
            <h1 className="p-6 text-xl">{people[nextPage].name}</h1>
            <p>{people[nextPage].description}</p>
            <div className="flex justify-evenly h-[297px] items-end py-8">
              <button
                id="cross"
                type="button"
                onClick={() => setNextPage(nextPage + 1)}
              >
                <ImCross />
              </button>
              <button
                onClick={() => setNextPage(nextPage - 1)}
                id="rewind"
                type="button"
              >
                <PiArrowCounterClockwiseBold />
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
    </>
  );
}
