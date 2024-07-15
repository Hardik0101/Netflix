"use client";
import Content from "@/components/component/Content";
import { useEffect, useState } from "react";
import {
  getActionMovies,
  getComedyMovies,
  getPopularMovie,
  getRomanticMovies,
  getThrillerMovies,
  getUpcomingMovie,
} from "@/api/ApiFetch";
import ImageSlider from "@/components/component/ImageSlider";
import SearchBar from "@/components/component/SearchBar";
import NavBar from "@/components/component/NavBar";

export default function Home() {
  useEffect(() => {
    const fetchMovies = async () => {
      await Promise.all([
        getActionMovies(),
        getComedyMovies(),
        getPopularMovie(),
        getRomanticMovies(),
        getThrillerMovies(),
        getUpcomingMovie(),
      ]);
    };

    fetchMovies();
  }, [
    getActionMovies,
    getComedyMovies,
    getPopularMovie,
    getRomanticMovies,
    getThrillerMovies,
    getUpcomingMovie,
  ]);

  const data = Array(10).fill(1);

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="w-full bg-black text-white pt-[9vh]">
        <NavBar searchText={searchText} setSearchText={setSearchText} />
        {searchText.length > 0 && <SearchBar searchText={searchText} />}
        <ImageSlider functions={getActionMovies} />
        <Content
          title={"New Upcoming Movies"}
          functions={getUpcomingMovie}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Popular Movies"}
          functions={getPopularMovie}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Comedy Movies"}
          functions={getComedyMovies}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Romantic Movies"}
          functions={getRomanticMovies}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Thriller Movies"}
          functions={getThrillerMovies}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Action Movies"}
          functions={getActionMovies}
          direction={"horizontal"}
          seeMore
          count={10}
        />
      </div>
    </>
  );
}
