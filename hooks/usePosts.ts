"use client";
import React, { useDeferredValue, useMemo, useState } from "react";
import { deleteApi, getApi, postApi, patchApi } from "../services";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { useStateContext } from "@/context/context";
import { useFormik } from "formik";
import { Toast } from "@/components/Toast";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { Post } from "@/typings";

interface Props {
  id?: string | number;
}
export default function usePosts(id?: Props) {
  const {
    setEdit,
    edit,
    editData,
    setEditData,
    setPosts,
    post,
    deletePostModal,
    editPostModal,
    modal2,
    modal3,
  } = useStateContext();
  const navigate = useRouter();
  const [inputText, setInputText] = useState("");
  const deferedValue = useDeferredValue(inputText);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const postId = editData?.id ?? id;
  const defaultValue = {
    title: editData?.title,
    body: editData?.body,
  };
  const validationSchema = yup.object().shape({
    title: yup.string().label("title").required(),
    body: yup.string().label("body").required(),
  });
  const createPostModal = () => setModal((prev) => !prev);
  const fetchPostByID = async () => {
    try {
      const resp = await getApi(`/posts/${postId}`);
      setEditData(editData?.title ? editData : resp);
      return resp;
    } catch (error) {
      console.error("Er", error);
    }
  };
  const fetchPosts = async () => {
    try {
      const resp = await getApi("/posts");
      setPosts(resp);
      return resp;
    } catch (error) {
      console.error("Er", error);
    }
  };

  const posts = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
    onSuccess: (data) => {
      console.log("data", data);
    },

    onError: (error: any) => console.error(error),
  });
  const postsById = useQuery({
    queryKey: ["postsbyId", postId],
    queryFn: fetchPostByID,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
    onSuccess: (data) => {
      console.log("data", data);
    },

    onError: (error: any) => console.error(error),
  });
  const postSearch = useMemo(
    () =>
      deferedValue
        ? post?.filter(
            (item: any) =>
              item?.title
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim()) ||
              item?.body
                ?.toLowerCase()
                ?.includes(deferedValue?.toLowerCase()?.trim())
          )
        : post,
    [deferedValue, post]
  );

  const {
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues: defaultValue,
    validationSchema,
    onSubmit: (values: any) => {
      submitHandler();
    },
  });

  const submitHandler = (e?: React.FormEvent) => {
    e?.preventDefault();
    mutate();
  };
  const payload: any = {
    title: values.title?.trim(),
    body: values.body?.trim(),
    userId: uuidv4(),
  };
  const addPost = async () => {
    const res = await postApi(`/posts`, payload);
    return res;
  };
  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (data) => {
      Toast({ title: "Post Successful", error: false });
      setSubmitting(false);
      handleReset(payload);
      setPosts((prevPosts: Post[]) => [
        { id: prevPosts.length + 1, ...data },
        ...prevPosts,
      ]);
      createPostModal();
    },
    onError: (error: any) => {
      console.log("there was an error", error);
    },
  });
  const editPost = async (e: React.FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    console.log(values?.title, values?.body);
    const res = await patchApi(`/posts/${editData?.id}`, {
      id: editData?.id,
      title: values?.title,
      body: values?.body,
      userId: editData?.userId,
    });
    handleReset(payload);
    setLoading(false);
    setEdit(false);
    navigate.push(`/dashboard/posts`);
    setEditData(null);
    editPostModal();
    Toast({ title: "Post Successful", error: false });
    setPosts((prevPosts: Post[]) =>
      prevPosts.map((p) => (p.id === res.id ? res : p))
    );
    return res;
  };

  const deletePost = async (e: React.FormEvent) => {
    e?.preventDefault();
    const res = await deleteApi(`/posts/${editData?.id}`);
    Toast({ title: "Deleted Successfully", error: false });
    setEdit(false);
    setEditData(null);
    deletePostModal();
    setPosts((prevPosts: Post[]) =>
      prevPosts.filter((post) => post.id !== editData?.id)
    );
    return res;
  };
  return {
    posts,
    setEdit,
    edit,
    editData,
    postsById,
    values,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    errors,
    isSubmitting,
    createPostModal,
    modal,
    deletePost,
    editPost,
    editPostModal,
    deletePostModal,
    modal2,
    modal3,
    loading,
    postSearch,
    inputText,
    setInputText,
    post,
  };
}
