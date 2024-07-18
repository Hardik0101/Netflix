"use client";
import { useCallback, useEffect, useState, useRef } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { CiSquareChevRight } from "react-icons/ci";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Gallery } from "./Gallery";
import SingleImage from "./SingleImage";

export default function Content({
  title,
  functions,
  direction,
  seeMore,
  count,
  icon,
}) {
  const [index, setIndex] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const dataRef = useRef([]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const popularData = await functions();
      setData(popularData.slice(0, count));
      dataRef.current = popularData;
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [functions]);

  useEffect(() => {
    if (dataRef.current.length === 0) {
      fetchData();
    } else {
      setData(dataRef.current);
      setLoading(false);
    }
  }, [fetchData]);
  const array = Array(10).fill(1);

  return (
    <>
      <LayoutGroup>
        {loading ? (
          <>
            <div className="px-4 my-3">
              <Skeleton width={"10%"} />
            </div>
            <div
              className={`flex ${
                direction === "vertical" ? "flex-wrap" : "flex-row"
              } gap-x-3 overflow-x-auto whitespace-nowrap px-4`}
            >
              {array.map((index) => (
                <div className="flex flex-col" key={index}>
                  <Skeleton height={280} width={190} />
                  <Skeleton />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-center justify-between p-2">
              <motion.h1
                initial={{ x: -350 }}
                animate={{ x: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.9,
                }}
                className="text-xl font-semibold p-2 max-sm:text-sm max-md:text-lg"
              >
                {title}
              </motion.h1>
              {!icon && <CiSquareChevRight size={30} />}
            </div>
            <Gallery
              items={data}
              setIndex={setIndex}
              title_name={title}
              direction={direction}
              seeMore={seeMore}
            />
          </>
        )}
        <AnimatePresence>
          {index !== false && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              key="overlay"
              className="fixed inset-0 bg-black opacity-60 z-50"
              onClick={() => setIndex(false)}
            />
          )}
          {index !== false && (
            <SingleImage
              key="image"
              item={data[index]}
              // onClick={() => setIndex(false)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
}
