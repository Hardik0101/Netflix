import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { debounce } from "lodash";
import SingleImage from "./SingleImage";

function SearchBar({ searchText }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchSearchResults = useCallback(
    debounce(async (query) => {
      if (!query) {
        setSearchResults([]);
        return;
      }
      try {
        setIsSearching(true);
        const apiUrl = "https://api.themoviedb.org/3/search/movie";
        const response = await axios.get(apiUrl, {
          params: {
            api_key: "df4e888c43bec24422bfa0f9a44e5747",
            query: query,
          },
        });
        setSearchResults(response.data.results.slice(0, 15));
      } catch (error) {
        console.error("Error fetching search results: ", error);
      } finally {
        setIsSearching(false);
      }
    }, 500),
    []
  );

  useEffect(() => {
    fetchSearchResults(searchText);
  }, [searchText, fetchSearchResults]);

  return (
    <LayoutGroup>
      <motion.div
        className="bg-red-400 w-[30vw] max-h-[80vh] flex flex-col overflow-y-auto whitespace-nowrap  rounded-sm p-2 z-50 fixed ml-40 max-sm:mx-13 max-md:ml-20 max-sm:w-[60vw] max-md:w-[50vw]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {isSearching && <h1>Loading...</h1>}
        {!isSearching && searchResults.length === 0 && <h1>No items found</h1>}
        {!isSearching && searchResults.length > 0 && (
          <div className="p-2 cursor-pointer">
            {searchResults.map((result) => (
              <motion.div
                whileHover={{ zoom: 1.08 }}
                key={result.id}
                className="flex flex-row items-center gap-x-2 mb-2 w-full"
                onClick={() => setSelectedImage(result)}
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                  priority={true}
                  alt={result.title}
                  width={80}
                  height={100}
                  className="w-[7vw] h-[10vw] border-[2px] border-black object-cover rounded max-sm:w-[14vw] max-sm:h-[20vw] max-md:w-[14vw] max-md:h-[20vw]"
                />
                <h1 className="text-black text-sm max-sm:text-[10px] max-md:text-[12px] w-[60%] whitespace-normal">
                  {result.title}
                </h1>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              key="overlay"
              className="fixed inset-0 bg-black opacity-60 z-50"
              onClick={() => setSelectedImage(false)}
            />

            <SingleImage
              key="image"
              item={selectedImage}
              onClick={() => setSelectedImage(false)}
            />
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default SearchBar;
