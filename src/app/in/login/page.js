"use client";
import "./../styles.css";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import MiniFooter from "@/components/component/MiniFooter";

function LoginPage() {
  return (
    <>
      <div className="main_bg w-[100vw] h-[100vh] text-white flex items-center ">
        <div className="bg-black/40 w-full h-full flex flex-col items-center ">
          <div className="flex flex-row justify-between items-center px-36 w-full">
            <Image
              src="/assets/image/Netflix_Logo.png"
              width={200}
              height={200}
              alt="Netflix Logo"
            />
            <div className="flex flex-row  items-center gap-3">
              <Select>
                <SelectTrigger className="w-[130px] h-[36px] bg-transparent text-white border-[1px] hover:border-[1px]">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <motion.div
            className="px-14 pt-14 rounded bg-black/80 flex flex-col w-[28vw] justify-end mt-auto mb-0 pb-32 gap-y-4"
            whileHover={{ scale: 1.1 }}
          >
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
              <Checkbox id="terms" className="bg-transparent border-white" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <h1>
              New to Netflix?{" "}
              <a href="#" className="hover:underline">
                Sign up now.
              </a>
            </h1>
            <p className="text-[12px] text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </motion.div>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default LoginPage;
