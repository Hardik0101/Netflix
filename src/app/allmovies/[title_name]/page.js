"use client";
import {
  getActionMovies,
  getComedyMovies,
  fetchPopularMovies,
  getRomanticMovies,
  getThrillerMovies,
  fetchUpcomingMovies,
} from "@/api/ApiFetch";
import Content from "@/components/component/Content";
import MiniFooter from "@/components/component/MiniFooter";
import NavBar from "@/components/component/NavBar";
import SearchBar from "@/components/component/SearchBar";
import { useState, useEffect } from "react";

const AllMovies = ({ params }) => {
  const [searchText, setSearchText] = useState("");
  const [fetchFunction, setFetchFunction] = useState(fetchPopularMovies);
  const decodedTitle = decodeURIComponent(params.title_name);

  useEffect(() => {
    switch (decodedTitle) {
      case "New Upcoming Movies":
        setFetchFunction(() => fetchUpcomingMovies);
        break;
      case "Popular Movies":
        setFetchFunction(() => fetchPopularMovies);
        break;
      case "Comedy Movies":
        setFetchFunction(() => getComedyMovies);
        break;
      case "Romantic Movies":
        setFetchFunction(() => getRomanticMovies);
        break;
      case "Thriller Movies":
        setFetchFunction(() => getThrillerMovies);
        break;
      case "Action Movies":
        setFetchFunction(() => getActionMovies);
        break;
      default:
        setFetchFunction(() => fetchPopularMovies);
        break;
    }
  }, [decodedTitle]);

  return (
    <div className="w-full bg-black text-white pt-[9vh]">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      {searchText.length > 0 && <SearchBar searchText={searchText} />}
      <Content
        title={decodedTitle}
        functions={fetchFunction}
        direction={"vertical"}
        seeMore={false}
        count={30}
        icon
      />
      <hr className="bg-[#232323] h-2 border-0" />
      <MiniFooter />
    </div>
  );
};

export default AllMovies;
