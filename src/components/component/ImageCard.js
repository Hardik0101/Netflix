import { motion } from "framer-motion";

function ImageCard({
  title,
  subtitle,
  rightImage,
  image,
  video,
  titleClassName,
  subTitleClassName,
  videoClassName,
}) {
  return (
    <>
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <hr className="bg-[#232323] h-2 border-0" />
        <div
          className={`flex flex-col lg:flex-row px-20 justify-center items-center py-10 w-full bg-black ${
            rightImage && "lg:flex-row-reverse"
          }`}
        >
          <div className="relative p-3 items-center justify-center w-full lg:w-1/2">
            {video && (
              <div
                className={`absolute inset-0 z-50 flex items-center justify-center ${videoClassName}`}
              >
                {video}
              </div>
            )}
            <div className="z-50 relative">{image}</div>
          </div>
          <div className="w-full lg:w-1/2 px-4 lg:px-10">
            <h1 className={`${titleClassName} text-2xl lg:text-4xl`}>
              {title}
            </h1>
            <h2 className={`${subTitleClassName} text-lg lg:text-2xl`}>
              {subtitle}
            </h2>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ImageCard;
