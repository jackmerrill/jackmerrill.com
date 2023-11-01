import { useState, useRef, useEffect } from "react";

export type Picture = {
  title: string;
  image: string;
};

const Carousel = ({ pictures }: { pictures: Picture[] }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < pictures.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: any) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && currentIndex >= pictures.length - 1) {
      return currentIndex >= pictures.length - 1;
    }

    return false;
  };

  function getClassnames(picture: Picture, index: number): string {
    switch (index) {
      case currentIndex: // current
        return "translate-x-0 z-20";
      case currentIndex - 1: // prev
        return "-translate-x-full z-10";
      case currentIndex + 1: // next
        return "translate-x-full z-10";
      default: // rest
        return "hidden";
    }
  }

  return (
    <div className="relative w-full">
      <div
        ref={carousel}
        className="relative h-56 overflow-hidden rounded-xl md:h-64"
      >
        {pictures.map((resource, index) => {
          return (
            <div
              key={index}
              className={`duration-700 ease-in-out transition-transform ${getClassnames(
                resource,
                index
              )}`}
            >
              <a
                href={resource.image || ""}
                target="_blank"
                className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              >
                <img
                  src={resource.image || ""}
                  alt={resource.title}
                  className="object-cover h-64 w-full"
                />
              </a>
            </div>
          );
        })}
      </div>

      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {pictures.map((p, i) => (
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current={p.title === pictures[currentIndex].title}
            aria-label={p.title}
            onClick={() => setCurrentIndex(i)}
          ></button>
        ))}
      </div>

      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={movePrev}
        disabled={isDisabled("prev")}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={moveNext}
        disabled={isDisabled("next")}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
