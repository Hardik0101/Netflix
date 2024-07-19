"use client";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ImageSlider({ functions }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const popularData = await functions();
        setData(popularData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const images = data.slice(0, 6).map((item) => ({
    url: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
  }));

  return (
    <div className="flex justify-center w-screen h-[74vh] max-sm:h-[26vh] max-md:h-[50vh] mt-2">
      {loading ? (
        <div>
          <Skeleton height={540} width={1000} />
        </div>
      ) : (
        <Carousel
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showIndicators={false}
          className=" w-[70vw] h-full"
        >
          {images.map((image, index) => (
            <div key={index} className=" w-full object-fill h-full ">
              <Image
                src={image.url}
                width={600}
                height={300}
                alt={`Slide ${index + 1}`}
                priority={true}
                className="rounded-sm"
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default ImageSlider;
