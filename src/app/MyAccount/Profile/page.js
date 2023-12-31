"use client";
import MainCard from "@/Components/Profile/MainCard";
import { useUserNextAuth } from "@/Context/useNextAuthContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { read, utils } from "xlsx";

const Profile = () => {
  const [xlsxData, setxlsxData] = useState({});
  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = utils.sheet_to_json(worksheet);
        setxlsxData(json);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  console.log(xlsxData);

  return (
    <div className=" container m-auto flex-col flex gap-5">
      <section>
        <MainCard />
      </section>
    </div>
  );
};

export default Profile;
