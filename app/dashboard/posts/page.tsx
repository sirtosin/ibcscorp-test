"use client";
import AddForm from "@/components/AddForm";
import { DeletePost } from "@/components/DeletePost";
import ModalCard from "@/components/Modal";
import { SearchField } from "@/components/Search";
import TableData from "@/components/TableData";
import usePosts from "@/hooks/usePosts";
import React from "react";

export default function page() {
  const {
    posts,
    createPostModal,
    modal,
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
    postSearch,
    inputText,
    setInputText,
    editPost,
    deletePost,
    editPostModal,
    deletePostModal,
    modal2,
    modal3,
    loading,
    editData,
  } = usePosts();

  return (
    <div className="p-10">
      <p
        onClick={createPostModal}
        className="cursor-pointer capitalize shadow rounded py-2 px-4 bg-gray-100 w-max"
      >
        Create Post
      </p>
      {modal3 && (
        <DeletePost
          modal={modal3}
          handleModal={deletePostModal}
          handleSubmit={deletePost}
          loading={modal2}
        />
      )}
      {modal2 &&(
          <ModalCard setOpen={editPostModal} open={modal2}>
            <AddForm
              handleSubmit={editPost}
              errors={errors}
              values={values}
              handleBlur={handleBlur}
              handleChange={handleChange}
              isSubmitting={loading}
              type="edit"
            />
          </ModalCard>
        )}
      {modal && (
        <ModalCard setOpen={createPostModal} open={modal}>
          <AddForm
            handleSubmit={handleSubmit}
            errors={errors}
            values={values}
            handleBlur={handleBlur}
            handleChange={handleChange}
            isSubmitting={isSubmitting}
            type="add"
          />
        </ModalCard>
      )}
      <div className="my-5">
        <SearchField inputText={inputText} setInputText={setInputText} />
      </div>
      <TableData
        dropdown={["edit", "delete"]}
        loading={posts?.isLoading}
        title="Posts"
        data={postSearch}
      />
    </div>
  );
}
