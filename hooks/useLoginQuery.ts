"use client";
import { useMutation } from "@tanstack/react-query";
import { Toast } from "../components/Toast";
import { useAppDispatch } from "../redux/hook";
import { login } from "../redux/userSlice";
import { postApi } from "../services";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";

export const useLoginQuery = () => {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const defaultValue = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    email: yup.string().label("email").required().email(),
    password: yup
      .string()
      .label("password")
      .required()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one uppercase, one lowercase, a number and a special character"
      ),
  });
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
    email: values.email?.trim(),
    password: values.password?.trim(),
  };
  useEffect(() => {
    // Prefetch the dashboard page
    navigate.prefetch("/dashboard");
  }, [navigate]);

  const { mutate } = useMutation({
    mutationFn: () => postApi(``, payload),
    onSuccess: (data) => {
      Toast({ title: "Login Successful", error: false });
      dispatch(login(payload));
      setSubmitting(false);
      handleReset(payload);
      navigate.push("/dashboard");
    },
    onError: (error: any) => {
      console.log("there was an error", error);
    },
  });
  return {
    handleSubmit,
    values,
    handleBlur,
    handleChange,
    errors,
    isSubmitting,
  };
};
