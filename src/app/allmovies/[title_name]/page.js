"use client";
import {
  getActionMovies,
  getComedyMovies,
  getPopularMovie,
  getRomanticMovies,
  getThrillerMovies,
  getUpcomingMovie,
} from "@/api/ApiFetch";
import Content from "@/components/component/Content";

const AllMovies = ({ params }) => {
  const decodedTitle = decodeURIComponent(params.title_name);
  switch (decodedTitle) {
    case "New Upcoming Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getUpcomingMovie}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    case "Popular Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getPopularMovie}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    case "Comedy Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getComedyMovies}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    case "Romantic Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getRomanticMovies}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    case "Thriller Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getThrillerMovies}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    case "Action Movies":
      return (
        <Content
          title={decodedTitle}
          functions={getActionMovies}
          direction={"vertical"}
          seeMore={false}
          count={30}
        />
      );
    default:
      return <div>Invalid URL {decodedTitle}</div>;
  }
};

export default AllMovies;
