import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clapperboard,
  Globe,
  Film,
  MonitorPlay,
} from "lucide-react";
import { getMoviesTrailers } from "@/api/ApiFetch";
import { Button } from "../ui/button";

const SingleImage = ({ item, onClick }) => {
  const router = useRouter();
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await getMoviesTrailers(item.id);
        const officialTrailer = popularData.results.find(
          (trailer) =>
            trailer.name.includes("Trailer") && trailer.type === "Trailer"
        );
        if (officialTrailer) {
          setTrailerKey(officialTrailer.key);
        }
      } catch (error) {
        console.error("Error fetching trailer data:", error);
      }
    };
    fetchData();
  }, [item.id]);

  return (
    <div
      className="fixed inset-0 flex justify-center items-center pointer-events-none text-black z-50 mt-6"
      onClick={onClick}
    >
      <motion.div
        layoutId={item.id}
        className="rounded-sm w-[90vw] md:w-[70vw] lg:w-[50vw]  bg-white p-5 shadow-lg pointer-events-auto  max-sm:p-3"
      >
        <div className="flex flex-col md:flex-row justify-start items-center ">
          <Image
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            priority={true}
            alt={item.title}
            width={200}
            height={300}
            className="w-[20vw] md:w-[14vw] h-[24vh] object-contain rounded md:mb-0 max-sm:h-[16vh] max-md:h-[20vh]"
          />
          <div className="text-center md:text-left ">
            <h1 className="text-2xl font-semibold mb-3 tracking-wide max-sm:text-sm max-md:text-lg max-sm:mb-0 max-md:mb-0">
              {item.title}
            </h1>
            <div className="flex flex-row items-center gap-x-1 ">
              <CalendarDays
                strokeWidth={2}
                className="max-sm:w-[18px] max-md:w-[20px]"
              />
              <p className="text-sm max-sm:text-[12px] max-md:text-[12px]">
                {item.release_date}
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-1 mt-2 max-sm:mt-0 max-md:mt-0">
              <Clapperboard
                strokeWidth={2}
                className="max-sm:w-[18px] max-md:w-[20px]"
              />
              <p className="text-sm max-sm:text-[12px] max-md:text-[12px]">
                {item.vote_average} / 10
              </p>
            </div>
            <div className="flex flex-row items-center gap-x-1 mt-2  max-sm:mt-0 max-md:mt-0">
              <Globe
                strokeWidth={2}
                className="max-sm:w-[18px] max-md:w-[20px]"
              />
              <p className="max-sm:text-[12px] max-md:text-[12px]">
                {item.original_language === "en" ? "English" : "Hindi"}
              </p>
            </div>
            <p className="mt-2  max-sm:mt-0 max-md:mt-0 p-[2px] rounded bg-gray-300 w-fit max-sm:text-[12px] max-md:text-[12px]">
              U/A {item.adult ? "18+" : "13+"}
            </p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-lg font-bold max-sm:text-sm max-md:text-sm">
            Description:
          </p>
          <p className="text-sm tracking-wide text-justify max-sm:text-[12px] max-md:text-[12px]">
            {item.overview}
          </p>
        </div>
        <div className="flex flex-row gap-x-2 mt-3 max-sm:flex-col   max-sm:gap-y-2 ">
          <Button
            variant="outline"
            className="gap-x-1 bg-gray-400 hover:bg-gray-300"
          >
            <Film strokeWidth={2} /> Watch Movie
          </Button>
          <Button
            className="gap-x-1 bg-[#e50914] hover:bg-red-700"
            onClick={() => {
              router.push(`/trailer/${trailerKey}`);
            }}
          >
            <MonitorPlay strokeWidth={1} />
            Watch Trailer
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default SingleImage;
