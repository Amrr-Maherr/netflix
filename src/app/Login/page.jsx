"use client";
import React from "react";
import { motion } from "framer-motion";
import Logo from "../../../public/Netflix_Logo_PMS.png";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Footer from "@/Components/Footer/Footer";
import bgImage from "../../../public/EG-en-20250303-TRIFECTA-perspective_3241eaee-fd55-4a8b-bd9e-cd6c0058b093_small.jpg";
import Header from "@/Components/Header/Header";

export default function Login() {
  const router = useRouter();

  const handleLogin = (values, { setSubmitting }) => {
    const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    if (
      storedUser &&
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      console.log("Login successful");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      alert("Invalid email or password");
      setSubmitting(false);
    }
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
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema,
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
        }}
        className="min-h-screen flex items-center justify-center relative pt-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="bg-black bg-opacity-80 rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 py-10 px-8 relative z-10 my-5">
          <motion.div variants={itemVariants} className="text-center mb-8">
            <Image
              src={Logo}
              alt="Netflix Logo"
              width={200}
              height={50}
              className="mx-auto"
              priority
            />
            <h1 className="text-3xl font-bold text-white mt-4">Sign In</h1>
          </motion.div>

          <motion.form
            onSubmit={formik.handleSubmit}
            variants={itemVariants}
            className="space-y-4"
          >
            {/* Email */}
            <div>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                className={`shadow appearance-none border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded w-full py-3 px-4 text-gray-100 bg-gray-700 bg-opacity-70 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600`}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-xs mt-1 px-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className={`shadow appearance-none border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-700"
                } rounded w-full py-3 px-4 text-gray-100 bg-gray-700 bg-opacity-70 leading-tight focus:outline-none focus:ring-2 focus:ring-red-600`}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-xs mt-1 px-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <button
                type="submit"
                disabled={
                  formik.isSubmitting || !formik.isValid || !formik.dirty
                }
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
              >
                {formik.isSubmitting ? "Signing In..." : "Sign In"}
              </button>
            </motion.div>
          </motion.form>

          {/* Link to Signup */}
          <motion.div variants={itemVariants} className="mt-10 text-center">
            <p className="text-gray-400">
              New to Netflix?{" "}
              <Link
                href="/Register"
                className="font-semibold text-white hover:underline"
              >
                Sign up now
              </Link>
              .
            </p>
            <p className="text-gray-500 text-xs mt-4">
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
