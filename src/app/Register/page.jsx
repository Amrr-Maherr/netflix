"use client"
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Netflix_Logo_PMS.png";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Footer from "@/Components/Footer/Footer";
import bgImage from "../../../public/EG-en-20250303-TRIFECTA-perspective_3241eaee-fd55-4a8b-bd9e-cd6c0058b093_small.jpg"
import Header from "@/Components/Header/Header";
export default function Register() {
  const router = useRouter();
  const handelSignup = (values, { setSubmitting }) => {
    // Destructure setSubmitting from formik helpers
    localStorage.setItem("userInfo", JSON.stringify(values)); // Use values directly from onSubmit handler
    console.log("Signup successful, redirecting..."); // Add console log for feedback
    setTimeout(() => {
      router.push("/Login");
      // setSubmitting(false); // Re-enable button if needed after navigation, though often not necessary
    }, 1000);
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),

    password: yup
      .string()
      .min(6, "Password must be at least 6 characters long")
      .required("Password is required"),

    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match") // Simplified oneOf, null is usually not needed here
      .required("Confirm password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: handelSignup,
    validationSchema: validationSchema,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header />
      <motion.div
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} // Adjusted style
        className="min-h-screen flex items-center justify-center relative pt-5" // Added relative
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Optional: Add a darker overlay to the entire background for better contrast */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div> */}

        {/* Form Container */}
        <div className="bg-black/80 rounded-lg shadow-ms w-full sm:w-3/4 md:w-1/2 lg:w-1/4 py-6 px-8 relative z-10 my-5">
          {" "}
          {/* Added bg-black bg-opacity-80 and z-10 */}
          {/* Logo */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white text-start mt-4">
              Sign Up
            </h1>{" "}
            {/* Added Title */}
          </motion.div>
          {/* Signup Form */}
          <motion.form
            onSubmit={formik.handleSubmit}
            variants={itemVariants}
            className="space-y-4" // Reduced space between elements slightly
          >
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-bold mb-2 sr-only" // Hide label visually but keep for screen readers
              >
                Email Address
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Add onBlur for touched state
                value={formik.values.email}
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className={`shadow appearance-none border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded w-full py-2 px-4 text-gray-100 bg-transparent bg-opacity-70 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`} // Adjusted styling and error border
              />
              {/* Error message */}
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1 px-1">
                  {" "}
                  {/* Adjusted styling */}
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-bold mb-2 sr-only" // Hide label
              >
                Password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Add onBlur
                value={formik.values.password}
                id="password"
                name="password"
                type="password"
                placeholder="Password (6+ characters)" // Added hint
                className={`shadow appearance-none border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded w-full py-2 px-4 text-gray-100  bg-transparent  bg-opacity-70 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`} // Adjusted styling and error border
              />
              {/* Error message */}
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1 px-1">
                  {" "}
                  {/* Adjusted styling */}
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-300 text-sm font-bold mb-2 sr-only" // Hide label
              >
                Confirm Password
              </label>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} // Add onBlur
                value={formik.values.confirmPassword}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className={`shadow appearance-none border ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded w-full py-2 px-4 text-gray-100  bg-transparent  bg-opacity-70 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent`} // Adjusted styling and error border
              />
              {/* Error message */}
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500 text-xs mt-1 px-1">
                    {" "}
                    {/* Adjusted styling */}
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            {/* Sign Up Button */}
            <motion.div variants={itemVariants} className="pt-4">
              {" "}
              {/* Added padding top */}
              <button
                className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full transition duration-150 ease-in-out" // Adjusted styling and added disabled state
                type="submit"
                disabled={
                  formik.isSubmitting || !formik.isValid || !formik.dirty
                } // Disable if submitting, invalid, or pristine
              >
                {formik.isSubmitting ? "Signing Up..." : "Sign Up"}
              </button>
            </motion.div>
            <div>
              <p className="text-center text-gray-400">OR</p>
            </div>
            <motion.div variants={itemVariants}>
              {" "}
              {/* Added padding top */}
              <button
                className="bg-[#33393D] cursor-pointer text-white font-normal py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 w-full transition duration-150 ease-in-out" // Adjusted styling and added disabled state
                type="submit"
                disabled={
                  formik.isSubmitting || !formik.isValid || !formik.dirty
                } // Disable if submitting, invalid, or pristine
              >
                Use a Sign-In Code
              </button>
            </motion.div>
            <div className="flex items-center justify-center">
              <a href="" className="text-white underline">
                Forgot password?
              </a>
            </div>
          </motion.form>
          {/* Already Have an Account */}
          <motion.div variants={itemVariants} className="mt-5 text-start">
            {" "}
            {/* Adjusted margin */}
            <p className="text-gray-400 text-[20px]">
              Already have an account?{" "}
              <Link
                className="font-semibold text-white hover:underline text-[20px]" // Adjusted styling
                href="/Login"
              >
                Sign in now
              </Link>
              .
            </p>
            {/* Optional: Recaptcha text */}
            <p className="text-gray-500 text-[15px] mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
