"use client";
import { useSelector } from "react-redux";
import { Gallery } from "@/components/component/Gallery";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";
import SingleImage from "@/components/component/SingleImage";
import NavBar from "@/components/component/NavBar";
import SearchBar from "@/components/component/SearchBar";

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.watchlist);
  const [index, setIndex] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-black text-white pt-[9vh]">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      {searchText.length > 0 && <SearchBar searchText={searchText} />}
      <h2 className="text-2xl font-bold mb-4 p-4">My Watchlist</h2>
      <div className="flex w-full flex-wrap">
        {watchlist.length > 0 ? (
          <LayoutGroup>
            <Gallery
              items={watchlist}
              seeMore={false}
              direction="vertical"
              setIndex={setIndex}
              title_name={"My Watchlist"}
            />
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
                <SingleImage key="image" item={watchlist[index]} />
              )}
            </AnimatePresence>
          </LayoutGroup>
        ) : (
          <h1 className="text-lg flex justify-center items-center">
            Your watchlist is empty.
          </h1>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
