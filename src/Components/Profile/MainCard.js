 
import { fetchUsersIndividual } from "@/Store/Actions/userActionIndividual";
import { Skeleton } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainCard = () => {
  const Users = useSelector((state) => state.user);
  const { isLoading, error, data } = Users;
  const { image, name, email, phoneNo, gender } = data;
  if (isLoading) {
    return <MainSkeleton />;
  }

  if (error) {
    return <div>Unexpected Error Occure</div>;
  }

  return (
    <div className="bg-white items-center relative w-full flex-col md:flex-row       flex justify-between  gap-5   p-5">
      {/* <button>
        <i className="uil uil-edit absolute top-5 right-5 text-xl" />
      </button> */}
      <div className=" ">
        <img src={image} className="w-20   rounded-full h-full" alt="User" />
      </div>

      <div className="w-full   place-items-center grid  grid-cols-2 gap-5 ">
        <div className="gap-2 flex-col flex">
          <div className="">
            <label className="font-semibold text-gray-400">Name</label>
            <p className="md:text-sm text-xs">{name}</p>
          </div>

          <div className="">
            <label className="font-semibold text-gray-400">Email</label>
            <p className="md:text-sm  text-xs">{email}</p>
          </div>
        </div>

        <div className="gap-2 flex-col flex">
          <div className="">
            <label className="font-semibold text-gray-400">Gender</label>
            <p className="md:text-sm text-xs">{gender}</p>
          </div>

          <div className="">
            <label className="font-semibold text-gray-400">Phone No.</label>
            <p className="md:text-sm text-xs">{phoneNo}</p>
          </div>
        </div>
      </div>

      <button>Edit</button>
    </div>
  );
};

export const MainSkeleton = () => {
  return (
    <div className="bg-white relative w-full flex-col flex justify-center items-center gap-5  md:w-fit p-5">
      <div className="w-40 flex-col flex justify-center items-center gap-5 ">
        <Skeleton
          variant="rectangular"
          className="rounded-full"
          width="150px"
          height="150px"
        />

        <Skeleton variant="rectangular" width="150px" height="40px" />
      </div>

      <div className="w-full md:w-96 flex-col bg-white flex justify-between gap-5 ">
        <div className="gap-2  grid grid-cols-2">
          <div className="">
            <label className="font-semibold text-gray-400">Name</label>
            <Skeleton variant="rectangular" width="100%" height="20px" />
          </div>

          <div className="">
            <label className="font-semibold text-gray-400">Email</label>
            <Skeleton variant="rectangular" width="100%" height="20px" />
          </div>
        </div>

        <div className="gap-2  grid grid-cols-2">
          <div className="">
            <label className="font-semibold text-gray-400">Gender</label>
            <Skeleton variant="rectangular" width="100%" height="20px" />
          </div>

          <div className="">
            <label className="font-semibold text-gray-400">Phone No.</label>
            <Skeleton variant="rectangular" width="100%" height="20px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
