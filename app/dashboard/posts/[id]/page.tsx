"use client"
import usePosts from "@/hooks/usePosts";
import { useParams } from "next/navigation";
import React from "react";

export default function page() {
  const { id } = useParams();
  const { editData } = usePosts(id);
  return (
    <div className="m-10 ">
      <div className="">
        <h1 className="text-xl font-medium capitalize">{editData?.title}</h1>
        <p className="w-1/2 text-gray-500 text-sm">{editData?.body}</p>
      </div>
    </div>
  );
}
