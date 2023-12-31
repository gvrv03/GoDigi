"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import UserDropDown from "./UserDropDown";
import SearchAll from "./UtilityComponents/SearchAll";
import { useUserNextAuth } from "@/Context/useNextAuthContext";

const Navbar = () => {
  const { userData, isLogin } = useUserNextAuth();
  return (
    <>
      <nav className=" py-1 md:px-0 px-5  fixed z-50 w-full left-0 bg-white backdrop-blur-2xl top-0 ">
        <div className=" flex container m-auto flex-wrap items-center justify-between mx-auto">
          {/* <div className=" flex flex-wrap container items-center justify-between mx-auto"> */}
          <Link href="/" className="flex items-center">
            <span className="  border   w-10 h-10 grid  rounded-full place-items-center  text-xl pColor rotate-45 font-bold">
              G
            </span>
            <span className="text-xl  md:block hidden font-semibold  text-gray-800 ml-2 ">
              GoDigi
            </span>
          </Link>
          
          <div
            type="button"
            className="inline-flex items-center py-2  gap-5 text-sm text-gray-500 rounded-lg dark:text-gray-400 "
          >
            <SearchAll />

            {!isLogin ? (
              <Link
                href="/Auth/SignIn"
                className="      w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
              >
                <i className="bi bi-person-fill"></i>
              </Link>
            ) : (
              <UserDropDown user={userData} />
            )}
            <Sidebar user={userData} isLogin={isLogin} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
