"use client";

import LogoNavBar from "@/components/component/Logo_NavBar";
import MiniFooter from "@/components/component/MiniFooter";
import NavBar from "@/components/component/NavBar";
import SearchBar from "@/components/component/SearchBar";
import { useState } from "react";

const MovieTrailer = ({ params }) => {
  const videoUrl = `https://www.youtube.com/embed/${params.videoKey}`;

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <div className="w-full bg-black text-white pt-[9vh]">
        <NavBar searchText={searchText} setSearchText={setSearchText} />
        {searchText.length > 0 && <SearchBar searchText={searchText} />}
        <div className="flex justify-center items-center min-h-screen bg-black">
          <div className="relative pb-[56.25%] w-full max-w-[100vw] lg:max-w-[100vw] xl:max-w-[100vw]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded YouTube Video"
            ></iframe>
          </div>
        </div>
        <hr className="bg-[#232323] h-2 border-0" />
        <MiniFooter />
      </div>
    </>
  );
};

export default MovieTrailer;
