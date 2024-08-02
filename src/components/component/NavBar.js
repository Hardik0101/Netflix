import { useState } from "react";
import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { IoHome } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiMenu } from "react-icons/hi";
import { FolderHeart, CircleX } from "lucide-react";
import TooltipMessage from "./Tooltip";
import Alert from "./Alert";
import UserForm from "./UserForm";
import SheetMenu from "./SheetMenu";

function NavBar({ searchText, setSearchText }) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const handleInputChange = (text) => {
    setSearchText(text);
  };

  const initialValues = {
    email: "test@example.com",
    name: "",
    mobile: "",
  };

  const pathname = usePathname();
  return (
    <div className="flex z-50 top-0 px-4  flex-row justify-between items-center fixed w-full bg-[#E50914] h-[9%]">
      <div className=" flex flex-row gap-x-6 items-center ">
        <Image
          src="/assets/image/Netflix_Black_Logo.png"
          width={120}
          height={120}
          alt="Netflix Logo"
          className="max-md:w-[120px] max-md:h-[120px] max-sm:w-[90px] max-sm:h-[90px] cursor-pointer"
          priority={true}
          onClick={() => {
            router.replace("/");
          }}
        />
        <div className="relative w-[30vw] md:w-[30vw] ">
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(text) => handleInputChange(text.target.value)}
            className="text-black pr-10 w-full h-[30px]"
          />
          {searchText ? (
            <CircleX
              onClick={() => setSearchText("")}
              width={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
            />
          ) : (
            <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
          )}
        </div>
      </div>
      <div className="block md:hidden">
        <SheetMenu
          triggerBtn={
            <HiMenu className="text-black cursor-pointer" size={30} />
          }
          closeSheet={
            <Link href={"/"}>
              <div className="flex flex-row gap-x-1 items-center  rounded-sm p-1 hover:bg-red-200">
                <IoHome color="black" size={16} />
                <h1>Home</h1>
              </div>
            </Link>
          }
          content={
            <>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex flex-row gap-x-1 items-center rounded-sm p-1 hover:bg-red-200 cursor-pointer">
                    <FaRegCircleUser color="black" size={16} />
                    <h1>Profile</h1>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <UserForm initialValues={initialValues} />
                    <Button
                      className="mt-3 bg-[#e50914] hover:bg-red-700"
                      type="submit"
                      onClick={() => setEdit(!edit)}
                    >
                      {edit ? "Edit" : "Save changes"}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              <div
                className="flex flex-row gap-x-1 items-center rounded-sm p-1 hover:bg-red-200 cursor-pointer"
                onClick={() => {
                  router.push("/mylist");
                }}
              >
                <FolderHeart color="black" size={16} />
                <h1>My List</h1>
              </div>
              <Alert
                btnTitle={"Log out"}
                alertMessage={"Are you absolutely sure?"}
                alertDescription={
                  " Are you sure you want to log out? Click OK to confirm and logout, or Cancel to stay logged in."
                }
                confirmBtnTitle={"OK"}
                cancelBtnTitle={"Cancel"}
                onConfirm={() => router.push("/in")}
                btnStyle={"bg-[#e50914] hover:bg-red-700 h-[30px]"}
              />
            </>
          }
        />
      </div>
      <ul
        className={`max-sm:hidden max-md:hidden md:flex flex-row items-center gap-x-2 md:gap-x-3`}
      >
        <TooltipMessage
          button={
            <li
              className={`p-1 md:p-2 rounded-full ${
                pathname === "/" ? "bg-white" : "hover:bg-white"
              } cursor-pointer`}
            >
              <Link href={"/"}>
                <IoHome
                  color="black"
                  size={30}
                  className="max-sm:hidden max-md:hidden"
                />
              </Link>
            </li>
          }
          message={"Home"}
        />
        <TooltipMessage
          button={
            <li className="p-1 md:p-2 rounded-full hover:bg-white cursor-pointer">
              <SheetMenu
                triggerBtn={
                  <FaRegCircleUser
                    color="black"
                    size={30}
                    className="max-sm:hidden"
                  />
                }
                title={"Profile"}
                image={
                  <Avatar className="w-16 h-16 flex items-center">
                    <AvatarImage
                      className="border-black rounded-full border-[2px] p-[1px]"
                      src="https://github.com/shadcn.png"
                      alt="profile"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                }
                description={`Make changes to your profile here. Click save when you&apos;re done.`}
                content={
                  <div>
                    <UserForm initialValues={initialValues} />
                    <Button
                      className="mt-3 bg-[#e50914] hover:bg-red-700"
                      type="submit"
                      onClick={() => setEdit(!edit)}
                    >
                      {edit ? "Edit" : "Save changes"}
                    </Button>
                  </div>
                }
              />
            </li>
          }
          message={"Profile"}
        />
        <TooltipMessage
          button={
            <li
              className={`p-1 md:p-2 rounded-full  ${
                pathname === "/mylist" ? "bg-white" : "hover:bg-white"
              } cursor-pointer`}
              onClick={() => {
                router.push("/mylist");
              }}
            >
              <FolderHeart
                color="black"
                size={30}
                className="max-sm:hidden max-md:hidden"
              />
            </li>
          }
          message={"My List"}
        />
        <li className="p-1 md:p-2">
          <Alert
            btnTitle={"Log out"}
            alertMessage={"Are you absolutely sure?"}
            alertDescription={
              " Are you sure you want to log out? Click OK to confirm and logout, or Cancel to stay logged in."
            }
            confirmBtnTitle={"OK"}
            cancelBtnTitle={"Cancel"}
            onConfirm={() => router.push("/in")}
          />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
