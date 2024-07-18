import { useState } from "react";
import { Input } from "../ui/input";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { IoHome } from "react-icons/io5";

import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "../ui/label";
import { HiMenu } from "react-icons/hi";
import { FolderHeart, CircleX } from "lucide-react";

function NavBar({ searchText, setSearchText }) {
  const router = useRouter();
  const [edit, setEdit] = useState(false);

  const handleInputChange = (text) => {
    setSearchText(text);
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
        <Sheet>
          <SheetTrigger asChild>
            <HiMenu className="text-black cursor-pointer" size={30} />
          </SheetTrigger>
          <SheetContent className="flex justify-center">
            <SheetHeader className="flex flex-col ">
              <SheetClose asChild>
                <Link href={"/"}>
                  <div className="flex flex-row gap-x-1 items-center  rounded-sm p-1 hover:bg-red-200">
                    <IoHome color="black" size={16} />
                    <h1>Home</h1>
                  </div>
                </Link>
              </SheetClose>
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
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <form className="flex flex-col gap-y-2 mt-4">
                      <Label className="text-black">Email address</Label>
                      <Input
                        type="email"
                        className="border-gray-400"
                        value={"test@example.com"}
                        disabled
                        placeholder="Enter email address"
                      />
                      <Label className="text-black">Name</Label>
                      <Input
                        type="text"
                        className="border-gray-400"
                        placeholder="Enter Your Name"
                      />
                      <Label className="text-black">Mobile Number</Label>
                      <Input
                        type="phone"
                        className="border-gray-400"
                        placeholder="Enter Your Mobile Number"
                      />
                    </form>
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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-[#e50914] hover:bg-red-700 h-[30px]">
                    Log out
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to log out? Click 'OK' to confirm
                      and logout, or 'Cancel' to stay logged in.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-[#e50914] hover:bg-red-700"
                      onClick={() => router.push("/in")}
                    >
                      OK
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <ul
        className={`max-sm:hidden max-md:hidden md:flex flex-row items-center gap-x-2 md:gap-x-3`}
      >
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
        <li className="p-1 md:p-2 rounded-full hover:bg-white cursor-pointer">
          <Sheet>
            <SheetTrigger asChild>
              <FaRegCircleUser
                color="black"
                size={30}
                className="max-sm:hidden"
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-col items-center">
                <SheetTitle>Profile</SheetTitle>
                <Avatar className="w-16 h-16 flex items-center">
                  <AvatarImage
                    className="border-black rounded-full border-[2px] p-[1px]"
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're
                  done.
                </SheetDescription>
              </SheetHeader>
              <div>
                {/* Profile details */}
                <form className="flex flex-col gap-y-2 mt-4">
                  <Label className="text-black">Email address</Label>
                  <Input
                    type="email"
                    className="border-gray-400"
                    value={"test@example.com"}
                    disabled
                    placeholder="Enter email address"
                  />
                  <Label className="text-black">Name</Label>
                  <Input
                    type="text"
                    className="border-gray-400"
                    placeholder="Enter Your Name"
                  />
                  <Label className="text-black">Mobile Number</Label>
                  <Input
                    type="phone"
                    className="border-gray-400"
                    placeholder="Enter Your Mobile Number"
                  />
                </form>
                <Button
                  className="mt-3 bg-[#e50914] hover:bg-red-700"
                  type="submit"
                  onClick={() => setEdit(!edit)}
                >
                  {edit ? "Edit" : "Save changes"}
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </li>
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
        <li className="p-1 md:p-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button>Log out</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to log out? Click 'OK' to confirm and
                  logout, or 'Cancel' to stay logged in.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-[#e50914] hover:bg-red-700"
                  onClick={() => router.push("/in")}
                >
                  OK
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
