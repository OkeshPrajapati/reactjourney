import React from "react";
import { useForm } from "react-hook-form";

const FormInputs = ({ getData }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    getData(data);
    reset();
  };

  return (
    <div className="w-full max-w-md bg-gray-200 rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        User Registration
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Name */}
        <input
          className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none p-3 rounded-lg text-gray-800 placeholder-gray-400"
          type="text"
          {...register("name", { required: true })}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">Name is required.</p>
        )}

        {/* Email */}
        <input
          className="border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none p-3 rounded-lg text-gray-800 placeholder-gray-400"
          type="email"
          {...register("email", { required: true })}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required.</p>
        )}

        {/* Phone */}
        <input
          className="border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none p-3 rounded-lg text-gray-800 placeholder-gray-400"
          type="number"
          {...register("number", { required: true })}
          placeholder="Enter your phone"
        />
        {errors.number && (
          <p className="text-red-500 text-sm">Phone number is required.</p>
        )}

        {/* URL */}
        <input
          className="border border-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none p-3 rounded-lg text-gray-800 placeholder-gray-400"
          type="url"
          {...register("url", { required: true })}
          placeholder="Enter your profile image URL"
        />
        {errors.url && (
          <p className="text-red-500 text-sm">Image URL is required.</p>
        )}

        <button
          type="submit"
          className="mt-2 p-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium shadow-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormInputs;
