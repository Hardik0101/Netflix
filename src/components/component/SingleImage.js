import { addToWatchlist, removeFromWatchlist } from "@/store/WatchlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useToast } from "../ui/use-toast";
import {
  CalendarDays,
  Clapperboard,
  Globe,
  MonitorPlay,
  Info,
} from "lucide-react";
import { fetchMovieTrailers } from "@/api/ApiFetch";
import { Button } from "../ui/button";
import { BsBookmarkHeart } from "react-icons/bs";
import { BsBookmarkHeartFill } from "react-icons/bs";
import Confetti from "react-confetti";

const SingleImage = ({ item, onClick }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const [trailerKey, setTrailerKey] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const { toast } = useToast();
  const cardRef = useRef(null);
  const myList = watchlist.some((watchItem) => watchItem.id === item.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularData = await fetchMovieTrailers(item.id);
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

  const handleMyList = () => {
    if (myList) {
      dispatch(removeFromWatchlist(item.id));
    } else {
      dispatch(addToWatchlist(item));
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    }
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-center pointer-events-none text-black z-50 mt-6"
      onClick={onClick}
    >
      <motion.div
        layoutId={item.id}
        ref={cardRef}
        className="rounded-sm w-[90vw] md:w-[70vw] lg:w-[50vw] bg-white p-5 shadow-lg pointer-events-auto max-sm:p-3 relative"
      >
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              priority={true}
              alt={item.title}
              width={200}
              height={300}
              className="w-[20vw] md:w-[14vw] h-[24vh] object-contain rounded md:mb-0 max-sm:h-[16vh] max-md:h-[20vh]"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl font-semibold mb-3 tracking-wide max-sm:text-sm max-md:text-lg max-sm:mb-0 max-md:mb-0">
                {item.title}
              </h1>
              <div className="flex flex-row items-center gap-x-1">
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
                  {item.vote_average.toFixed(1)} / 10
                </p>
              </div>
              <div className="flex flex-row items-center gap-x-1 mt-2 max-sm:mt-0 max-md:mt-0">
                <Globe
                  strokeWidth={2}
                  className="max-sm:w-[18px] max-md:w-[20px]"
                />
                <p className="max-sm:text-[12px] max-md:text-[12px]">
                  {item.original_language === "en" ? "English" : "Hindi"}
                </p>
              </div>
              <p className="mt-2 max-sm:mt-0 max-md:mt-0 p-[2px] rounded bg-gray-300 w-fit max-sm:text-[12px] max-md:text-[12px]">
                U/A {item.adult === true ? "18+" : "13+"}
              </p>
            </div>
          </div>
          <div className="flex ml-2 self-start right-0">
            {myList ? (
              <BsBookmarkHeartFill
                className="cursor-pointer"
                size={40}
                color="red"
                onClick={() => {
                  handleMyList();
                }}
              />
            ) : (
              <BsBookmarkHeart
                size={40}
                className="cursor-pointer"
                onClick={() => {
                  toast({
                    variant: "destructive",
                    title: "Watch Your MY List",
                    description: `${item.title} has been added to your list.`,
                  });
                  handleMyList();
                }}
              />
            )}
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
        <div className="flex flex-row gap-x-2 mt-3 max-sm:flex-col max-sm:gap-y-2">
          <Button
            variant="outline"
            className="gap-x-1 bg-gray-400 hover:bg-gray-300"
            onClick={() => {
              router.push(`/details/${item.id}`);
            }}
          >
            <Info /> See More Details
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
        {showConfetti && (
          <div className="absolute inset-0">
            <Confetti
              numberOfPieces={400}
              recycle={false}
              gravity={0.2}
              width={cardRef.current.clientWidth}
              height={cardRef.current.clientHeight}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SingleImage;
