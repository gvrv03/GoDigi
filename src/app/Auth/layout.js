"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import { useRouter } from "next/navigation";
const AuthLayout = ({ children }) => {
  const { isLogin } = useUserNextAuth();
  const router = useRouter();
  if (isLogin) {
    router.push("/");
  }
  return (
    <div className="container m-auto flex h-screen      items-center gap-10">
      <div className="w-3/4 hidden md:grid  place-items-center ">
        <img src="/img/Auth.svg" />
      </div>
      <div className="w-full md:w-1/4      p-5 ">
        <div className="grid place-items-center max-w-mdrounded-sm ">
          {children}
        </div>

        <div className="flex justify-center items-center gap-5 mt-5">
          <button
            onClick={() => {
              signIn("google");
            }}
            className="bg-blue-500 w-10 h-10 text-white rounded-full p-2"
          >
            <i className="bi bi-google" />
          </button>

          <button className="bg-blue-500 w-10 h-10 text-white rounded-full p-2">
            <i className="bi bi-github" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
