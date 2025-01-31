
import React from "react";
import Input from "./Input";
import Button from "./Button";

interface Props {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  errors: Record<string, string>|any;
  values: Record<string, string>|any;
  handleBlur: (e?:any) => void;
  handleChange: (e?:any) => void;
  isSubmitting: boolean;
  type: 'edit' | 'add'; // 'edit' or 'add'
}
export default function AddForm({
  handleSubmit,
  errors,
  values,
  handleBlur,
  handleChange,
  isSubmitting,
  type
}:Props) {
  return (
    <div className="">
        <h2 className="text-center font-semibold text-xl capitalize">{type} Post </h2>
      <form className="w-full space-y-2">
        <Input
          label="Title"
          placeholder="Enter title"
          name="title"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.title}
        />
        {errors.title ? (
          <p className="text-xs text-red-500 mb-3">{errors.title}</p>
        ) : null}
        <Input
          label="Body"
          placeholder="Enter body"
          name="body"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.body}
        />
        {errors.body ? (
          <p className="text-xs text-red-500 mb-3">{errors.body}</p>
        ) : null}
        <Button
          loading={isSubmitting}
          label="Send Post "
          onClick={handleSubmit}
          styles="bg-[#0A74DC]  w-full"
        />
      </form>
    </div>
  );
}
