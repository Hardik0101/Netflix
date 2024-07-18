"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";

export function Gallery({
  items,
  setIndex,
  title_name,
  seeMore,
  direction = "horizontal",
}) {
  const router = useRouter();

  return (
    <div
      className={`bg-black ${
        direction === "horizontal"
          ? "p-2 flex flex-row overflow-x-auto whitespace-nowrap"
          : "p-2 flex flex-wrap overflow-y-auto whitespace-normal"
      }`}
    >
      {items.map((item, index) => (
        <motion.div
          className={`rounded-lg p-[2px] overflow-hidden cursor-pointer m-2 inline-block ${
            direction === "vertical"
              ? "w-[40vw] sm:w-[44vw] md:w-[30vw] lg:w-[14vw] xl:w-[13vw]"
              : "min-w-[44vw] sm:min-w-[30vw] md:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[13vw]"
          }`}
          key={index}
          onClick={() => setIndex(index)}
          layoutId={index}
          whileHover={{ scale: 1.05 }}
        >
          <div
            className={`flex flex-col text-white ${
              direction === "vertical" &&
              "sm:w-[40vw] md:w-[30vw] w-[40vw] lg:w-[12vw]"
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-lg hover:border-[3px] hover:border-white"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                width={200}
                height={300}
                className="object-cover rounded-lg"
                layout="responsive"
                priority={true}
              />
            </motion.div>
            <p className="text-sm mt-2 ">{item.title}</p>
          </div>
        </motion.div>
      ))}
      {seeMore && (
        <motion.div
          onClick={() => {
            router.push(`/allmovies/${title_name}`);
          }}
          className="p-[2px] overflow-hidden cursor-pointer m-2 inline-block min-w-[44vw] sm:min-w-[30vw] md:min-w-[30vw] lg:min-w-[20vw] xl:min-w-[13vw]  "
        >
          <div className="flex flex-col text-white h-[90%] bg-gray-600 rounded-lg hover:border-[3px] hover:border-white">
            <BiCategory size={40} className="w-full object-cover h-full" />
          </div>
          <p className="text-lg mt-2 whitespace-pre-wrap text-center">
            See more
          </p>
        </motion.div>
      )}
    </div>
  );
}
