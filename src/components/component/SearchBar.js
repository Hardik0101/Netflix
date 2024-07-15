import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

function SearchBar({ searchText }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchText) {
        setSearchResults([]);
        return;
      }
      try {
        setIsSearching(true);
        const apiUrl = "https://api.themoviedb.org/3/search/movie";
        const response = await axios.get(apiUrl, {
          params: {
            api_key: "df4e888c43bec24422bfa0f9a44e5747",
            query: searchText,
          },
        });
        setSearchResults(response.data.results.slice(0, 15));
      } catch (error) {
        console.error("Error fetching search results: ", error);
      } finally {
        setIsSearching(false);
      }
    };

    fetchSearchResults();
  }, [searchText]);

  return (
    <div className="bg-red-400 w-[30vw] h-[80vh] flex flex-col overflow-y-auto whitespace-nowrap  rounded-sm p-2 z-50 fixed ml-40 max-sm:mx-13  max-md:ml-20 max-sm:w-[60vw] max-md:w-[50vw]">
      {isSearching && <h1>Loading...</h1>}
      {!isSearching && searchResults.length === 0 && <h1>No items found</h1>}
      {!isSearching && searchResults.length > 0 && (
        <div className=" p-2">
          {searchResults.map((result) => (
            <div className="flex flex-row items-center gap-x-2 mb-2 ">
              <Image
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                priority={true}
                alt={result.title}
                width={80}
                height={100}
                className="w-[7vw] h-[10vw] border-[2px] border-black object-cover rounded max-sm:w-[14vw] max-sm:h-[20vw]  max-md:w-[14vw] max-md:h-[20vw]"
              />
              <h1 className="text-black text-sm max-sm:text-[10px] max-md:text-[12px]">
                {result.title}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
