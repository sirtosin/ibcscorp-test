"use client";
import DashboardCard from "@/components/DashboardCard";
import React from "react";
import TableData from "@/components/TableData";
import usePosts from "@/hooks/usePosts";

export default function page() {
  const { post, posts, postSearch } = usePosts();
  return (
    <>
      <div className="flex space-x-2 flex-wrap">
        <DashboardCard title="All Posts" num={post?.length} color="#A9FFE0" />
      </div>
      <TableData
        dropdown={[]}
        loading={posts?.isLoading}
        title="Posts"
        data={postSearch}
      />
    </>
  );
}
