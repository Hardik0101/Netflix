"use client";
import "./../styles.css";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import MiniFooter from "@/components/component/MiniFooter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";
import SelectLanguage from "@/components/component/selectLanguage";
import { useRouter } from "next/navigation";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,})$/;
  return re.test(email);
};

const validatePassword = (password) => {
  const re =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
  return re.test(password);
};

const validateMobileNumber = (number) => {
  const re = /^\d{10}$/;
  return re.test(number);
};

const validateName = (name) => {
  const re = /^[a-zA-Z\s]+$/;
  return re.test(name);
};

function LoginPage() {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signInErrors, setSignInErrors] = useState({ email: "", password: "" });

  const [loginName, setLoginName] = useState("");
  const [loginMobile, setLoginMobile] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginErrors, setLoginErrors] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!validateEmail(signInEmail)) {
      errors.email = "Invalid email address.";
    }
    if (!validatePassword(signInPassword)) {
      errors.password = "Password must be strong. Like Abc@123";
    }
    setSignInErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Sign In Success");
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!validateName(loginName)) {
      errors.name = "Username must be at least";
    }
    if (!validateMobileNumber(loginMobile)) {
      errors.mobile = "Mobile number must be 10 digits.";
    }
    if (!validateEmail(loginEmail)) {
      errors.email = "Invalid email address.";
    }
    if (!validatePassword(loginPassword)) {
      errors.password = "Password must be strong. Like Abc@123";
    }
    setLoginErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("Login Success");
    }
  };

  const router = useRouter();

  return (
    <>
      <div className="main_bg w-[100vw] h-[100vh] text-white flex items-center ">
        <div className="bg-black/70 w-full h-full flex flex-col items-center ">
          <div className="flex flex-wrap justify-center md:flex-row md:justify-between items-center md:px-36 px-10 w-full ">
            <Image
              src="/assets/image/Netflix_Logo.png"
              width={180}
              height={180}
              alt="Netflix Logo"
              className="cursor-pointer"
              onClick={() => {
                router.replace("/in");
              }}
            />
            <SelectLanguage />
          </div>

          <Tabs defaultValue="signIn" className="mt-5">
            <TabsList className="grid w-full grid-cols-2 bg-gray-300">
              <TabsTrigger value="signIn">Sign In</TabsTrigger>
              <TabsTrigger value="login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="signIn">
              <form
                onSubmit={handleSignInSubmit}
                className="px-6 md:px-14 pt-12 rounded bg-black/80 flex flex-col md:w-96 sm:w-96 justify-end mt-auto mb-0 pb-32 gap-y-4 text-sm"
              >
                <h1 className="text-2xl font-bold">Sign In</h1>
                <div>
                  <Input
                    type="email"
                    className="bg-black/60 border-[1px]  rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Email address"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                  />
                  {signInErrors.email && (
                    <p className="text-red-500 text-sm">{signInErrors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="password"
                    className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Enter Password"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                  />
                  {signInErrors.password && (
                    <p className="text-red-500 text-sm">
                      {signInErrors.password}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#e50914] rounded hover:bg-red-700"
                >
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
                  This page is protected by Google reCAPTCHA to ensure{" "}
                  {"you're "}
                  not a bot.{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Learn more.
                  </a>
                </p>
              </form>
            </TabsContent>
            <TabsContent value="login">
              <form
                onSubmit={handleLoginSubmit}
                className="px-4 md:px-14 pt-12 rounded bg-black/80 flex flex-col md:w-96 sm:w-96 justify-end mt-auto mb-0 pb-32 gap-y-4 text-sm"
              >
                <h1 className="text-2xl font-bold">Login</h1>
                <div>
                  <Input
                    type="text"
                    className="capitalize bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Enter Name"
                    value={loginName}
                    onChange={(e) => setLoginName(e.target.value)}
                  />
                  {loginErrors.mobile && (
                    <p className="text-red-500 text-sm">{loginErrors.name}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="text"
                    className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Enter Mobile Number"
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(e.target.value)}
                  />
                  {loginErrors.mobile && (
                    <p className="text-red-500 text-sm">{loginErrors.mobile}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="email"
                    className="bg-black/60 border-[1px]  rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Email address"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                  />
                  {loginErrors.email && (
                    <p className="text-red-500 text-sm">{loginErrors.email}</p>
                  )}
                </div>
                <div>
                  <Input
                    type="password"
                    className="bg-black/60 border-[1px] rounded border-gray-600 hover:border-[1px] hover:border-gray-300"
                    placeholder="Enter Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                  />
                  {loginErrors.password && (
                    <p className="text-red-500 text-sm">
                      {loginErrors.password}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#e50914] rounded hover:bg-red-700"
                >
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
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <MiniFooter />
    </>
  );
}

export default LoginPage;
