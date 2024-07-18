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
import Footer from "@/components/component/MainFooter";

export default function Home() {
  return (
    <>
      <div>
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
