"use client";
import Content from "@/components/component/Content";
import { useEffect, useState } from "react";
import {
  getActionMovies,
  getComedyMovies,
  fetchPopularMovies,
  getRomanticMovies,
  getThrillerMovies,
  fetchUpcomingMovies,
} from "@/api/ApiFetch";
import ImageSlider from "@/components/component/ImageSlider";
import SearchBar from "@/components/component/SearchBar";
import NavBar from "@/components/component/NavBar";
import Footer from "@/components/component/MainFooter";

export default function Home() {
  useEffect(() => {
    const fetchMovies = async () => {
      await Promise.all([
        getActionMovies(),
        getComedyMovies(),
        fetchPopularMovies(),
        getRomanticMovies(),
        getThrillerMovies(),
        fetchUpcomingMovies(),
      ]);
    };

    fetchMovies();
  }, [
    getActionMovies,
    getComedyMovies,
    fetchPopularMovies,
    getRomanticMovies,
    getThrillerMovies,
    fetchUpcomingMovies,
  ]);

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="w-full bg-black text-white pt-[9vh]">
        <NavBar searchText={searchText} setSearchText={setSearchText} />
        {searchText.length > 0 && <SearchBar searchText={searchText} />}
        <ImageSlider functions={getActionMovies} />
        <Content
          title={"New Upcoming Movies"}
          functions={fetchUpcomingMovies}
          direction={"horizontal"}
          seeMore
          count={10}
        />
        <Content
          title={"Popular Movies"}
          functions={fetchPopularMovies}
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
      <hr className="bg-[#232323] h-2 border-0" />
      <Footer />
    </>
  );
}
