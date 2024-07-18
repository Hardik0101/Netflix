"use client";

import React, { useEffect, useState } from "react";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchRecommendation,
} from "@/api/ApiFetch";
import Image from "next/image";
import MiniFooter from "@/components/component/MiniFooter";
import NavBar from "@/components/component/NavBar";
import SearchBar from "@/components/component/SearchBar";
import { Gallery } from "@/components/component/Gallery";

const MovieDetails = ({ params }) => {
  const [details, setDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const [departmentCast, setDepartmentCast] = useState({});
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!params.id) {
        setDetails({});
        setCast([]);
        setDepartmentCast({});
        return;
      }
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails(params.id);
        const responseCast = await fetchMovieCast(params.id);
        setDetails(response);
        setCast(
          responseCast.cast
            .filter((castMember) => castMember.profile_path)
            .slice(0, 9)
        );

        const crewByDepartment = responseCast.crew
          .filter((castMember) => castMember.profile_path)
          .reduce((acc, member) => {
            if (!acc[member.department]) {
              acc[member.department] = [];
            }
            acc[member.department].push(member);
            return acc;
          }, {});

        setDepartmentCast(crewByDepartment);
      } catch (error) {
        console.error("Error fetching movie details: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [params.id]);

  useEffect(() => {
    const fetchReMovies = async () => {
      try {
        const response = await fetchRecommendation(params.id);
        setData(response.results.slice(0, 9));
      } catch (error) {
        console.error("Error fetching recommended movies: ", error);
      }
    };
    fetchReMovies();
  }, [params.id]);

  if (isLoading) {
    return <div className="bg-black text-white">Loading...</div>;
  }

  if (!details.title) {
    return <div className="bg-black text-white">No details available</div>;
  }

  return (
    <>
      <div className="w-full bg-black text-white pt-[9vh]">
        <NavBar searchText={searchText} setSearchText={setSearchText} />
        {searchText.length > 0 && <SearchBar searchText={searchText} />}
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          priority={true}
          alt={details.title}
          width={200}
          height={300}
          className="w-[20vw] md:w-[14vw] h-[24vh] object-contain rounded md:mb-0 max-sm:h-[16vh] max-md:h-[20vh]"
        />
        <h1 className="text-2xl font-bold">{details.title}</h1>
        <p>{details.overview}</p>
        <p>Release Date: {details.release_date}</p>
        <p>Rating: {details.vote_average}</p>
        {params.id}

        <h1>Acting</h1>
        <div className="flex flex-wrap gap-x-3 ">
          {cast.map((castMember, index) => (
            <div key={index} className="border-2 rounded-sm border-white">
              <h2>{castMember.name}</h2>
              <Image
                src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                alt={castMember.name}
                width={100}
                height={100}
                className="rounded-full w-[6vw] h-[6vw] object-contain bg-white"
              />
            </div>
          ))}
        </div>

        {Object.keys(departmentCast).map((department, index) => (
          <div key={index} className="mt-4">
            <h2 className="text-xl font-bold">{department}</h2>
            <div className="flex flex-wrap gap-x-3 ">
              {departmentCast[department].map((castMember, idx) => (
                <div key={idx} className="border-2 rounded-sm border-white">
                  <h2>{castMember.name}</h2>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`}
                    alt={castMember.name}
                    width={100}
                    height={100}
                    className="rounded-full w-[6vw] h-[6vw] object-contain bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {data.length > 0 && (
        <Gallery
          items={data}
          seeMore={true}
          title_name={"Recommendation"}
          direction="horizontal"
        />
      )}
      <hr className="bg-[#232323] h-2 border-0" />
      <MiniFooter />
    </>
  );
};

export default MovieDetails;
