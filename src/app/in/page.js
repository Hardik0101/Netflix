"use client";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import "./styles.css";
import { Input } from "@/components/ui/input";
import { CgChevronRight } from "react-icons/cg";
import { FAQcontent } from "@/components/component/FAQ";
import ImageCard from "@/components/component/ImageCard";
import Footer from "@/components/component/MainFooter";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push("in/login");
  };

  return (
    <>
      <div className="bg-black">
        <div className="main_bg w-[100vw]">
          <div className="bg-black/70">
            <div className="flex flex-row justify-between items-center px-36">
              <Image
                src="/assets/image/Netflix_Logo.png"
                width={200}
                height={200}
                alt="Netflix Logo"
              />
              <div className="flex flex-row justify-center items-center gap-3">
                <Select>
                  <SelectTrigger className="w-[130px] h-[36px] bg-transparent text-white border-[1px] hover:border-[1px]">
                    <SelectValue placeholder="English" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                  </SelectContent>
                </Select>
                <motion.button
                  initial={{ x: 300 }}
                  animate={{ x: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    duration: 0.8,
                  }}
                  onClick={handleClick}
                  className="bg-[#e50914] h-[36px] hover:bg-red-700 rounded-md px-3 text-white"
                >
                  Sign In
                </motion.button>
              </div>
            </div>
            <div className="flex justify-center items-center flex-col h-[80vh] w-full">
              <div className="text-5xl text-white font-bold">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Unlimited movies, TV shows and more")
                      .pauseFor(100)
                      .start();
                  }}
                />
              </div>
              <h2 className="text-xl text-white mt-4">
                Watch anywhere. Cancel anytime.
              </h2>
              <h1 className="text-xl text-white mt-4">
                Ready to watch? Enter your email to create or restart your
                membership.
              </h1>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center space-x-2 w-[40vw] mt-3"
              >
                <Input
                  type="email"
                  className="bg-black/60 border-[1px] h-[50px] text-white rounded-sm border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Email address"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleClick}
                  className="h-[50px] w-[20vw] bg-[#e50914] font-extrabold text-2xl hover:bg-red-700 rounded-md px-3 text-white flex flex-row items-center"
                >
                  Get Started <CgChevronRight width={30} height={30} />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
        <ImageCard
          rightImage
          image={
            <Image
              src="/assets/image/Netflix_tv.png"
              width={500}
              height={500}
              alt="Netflix Logo"
            />
          }
          video={
            <video autoPlay muted loop>
              <source
                src="/assets/videos/Netflix_video-tv.m4v"
                type="video/mp4"
              />
            </video>
          }
          videoClassName={"w-[25vw] h-[25vh] top-24 left-20"}
          titleClassName={"text-white text-5xl font-bold"}
          subTitleClassName={"text-white text-xl font-semibold mt-6 "}
          title={"Enjoy on your TV"}
          subtitle={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
        />

        <ImageCard
          image={
            <Image
              src="/assets/image/Netflix_mobile.jpg"
              width={500}
              height={500}
              alt="Netflix Logo"
            />
          }
          titleClassName={"text-white text-5xl font-bold"}
          subTitleClassName={"text-white text-xl font-semibold mt-6 "}
          title={"Download your shows to watch offline"}
          subtitle={
            "Save your favourites easily and always have something to watch."
          }
        />

        <ImageCard
          rightImage
          image={
            <Image
              src="/assets/image/Netflix_device-pile.png"
              width={500}
              height={500}
              alt="Netflix Logo"
            />
          }
          video={
            <video autoPlay muted loop>
              <source
                src="/assets/videos/Netflix_video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          }
          videoClassName={"w-[22vw] h-[26vh] top-8 left-24"}
          titleClassName={"text-white text-5xl font-bold"}
          subTitleClassName={"text-white text-xl font-semibold mt-6 "}
          title={"Watch everywhere"}
          subtitle={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
          }
        />

        <ImageCard
          image={
            <Image
              src="/assets/image/Netflix_child.png"
              width={500}
              height={500}
              alt="Netflix Logo"
            />
          }
          titleClassName={"text-white text-5xl font-bold"}
          subTitleClassName={"text-white text-xl font-semibold mt-6 "}
          title={"Create profiles for kids"}
          subtitle={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
        />
        <hr className="bg-[#232323] h-2 border-0" />
        <FAQcontent />
        <hr className="bg-[#232323] h-2 border-0" />
        <Footer />
      </div>
    </>
  );
}
