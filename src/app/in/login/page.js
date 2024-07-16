"use client";
import "./../styles.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import Image from "next/image";
import MiniFooter from "@/components/component/MiniFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import SelectLanguage from "@/components/component/selectLanguage";

function LoginPage() {
  return (
    <>
      <div className="main_bg w-[100vw] h-[100vh] text-white flex items-center ">
        <div className="bg-black/70 w-full h-full flex flex-col items-center ">
          <div className="flex flex-row justify-between items-center px-36 w-full">
            <Image
              src="/assets/image/Netflix_Logo.png"
              width={200}
              height={200}
              alt="Netflix Logo"
            />
            <SelectLanguage />
          </div>

          <Tabs defaultValue="signIn">
            <TabsList className="grid w-full grid-cols-2 bg-gray-300">
              <TabsTrigger value="signIn">Sign In</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signIn">
              <div className="px-14 pt-14 rounded bg-black/80 flex flex-col w-[28vw] justify-end mt-auto mb-0 pb-32 gap-y-4">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <Input
                  type="email"
                  className="bg-black/60 border-[1px]  rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Email address"
                />
                <Input
                  type="password"
                  className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Enter Password"
                />
                <Button className="w-full bg-[#e50914] rounded hover:bg-red-700">
                  Sign In
                </Button>
                <h1 className="text-center">OR</h1>
                <Button className="w-full bg-white/30 hover:bg-white/20 rounded">
                  Use a sign-in code
                </Button>
                <a href="#" className="text-center font-light">
                  Forgot password?
                </a>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    className="bg-transparent border-white"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <h1>
                  New to Netflix?
                  <TabsList className="bg-transparent text-white p-0 -ml-2">
                    <TabsTrigger value="login">
                      <a className="hover:underline">Sign up now.</a>
                    </TabsTrigger>
                  </TabsList>
                </h1>
                <p className="text-[12px] text-gray-400">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more.
                  </a>
                </p>
              </div>
            </TabsContent>
            <TabsContent value="login">
              <div className="px-14 pt-14 rounded bg-black/80 flex flex-col w-[28vw] justify-end mt-auto mb-0 pb-32 gap-y-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <Input
                  type="text"
                  className="capitalize bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Enter Name"
                />
                <Input
                  type="text"
                  className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Enter Mobile Number"
                />
                <Input
                  type="email"
                  className="bg-black/60 border-[1px]  rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Email address"
                />
                <Input
                  type="password"
                  className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                  placeholder="Enter Password"
                />

                <Button className="w-full bg-[#e50914] rounded hover:bg-red-700">
                  Login
                </Button>
                <h1 className="text-center">OR</h1>
                <Button className="w-full bg-white/30 hover:bg-white/20 rounded gap-x-1">
                  <FcGoogle size={20} /> Login with Google
                </Button>
                <h1>
                  Already have an account?
                  <TabsList className="bg-transparent text-white p-0 -ml-2">
                    <TabsTrigger value="signIn">
                      <a className="hover:underline">Sign In now.</a>
                    </TabsTrigger>
                  </TabsList>
                </h1>
                <p className="text-[12px] text-gray-400">
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more.
                  </a>
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default LoginPage;
