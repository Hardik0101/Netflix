import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function LogoNavBar({ className }) {
  const router = useRouter();
  return (
    <div
      className={`flex justify-start items-center bg-[#e50914] h-[9vh] px-6 ${className}`}
    >
      <Image
        src="/assets/image/Netflix_Black_Logo.png"
        width={120}
        height={120}
        alt="Netflix Logo"
        className="w-[100px] h-[70px] md:w-[120px] md:h-[120px] sm:w-[90px] sm:h-[90px] cursor-pointer"
        priority={true}
        onClick={() => {
          router.replace("/");
        }}
      />
    </div>
  );
}

export default LogoNavBar;
