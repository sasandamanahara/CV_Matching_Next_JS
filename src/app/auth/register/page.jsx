"use client"; // This is a client component
import React, { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import "../assets/css/tailwind.css";
import "../assets/scss/tailwind.scss";
import "../assets/scss/icons.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register_me_company } from "../../(company)/Services/auth";
import { register_me_jobseeker } from "../../(jobseeker)/Services/auth";
import { Button } from "react-scroll";

/**
 * Login component
 */
export default function Register() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "", name: "" });

    
    const handleCompanyRegister = async (e) => {
      e.preventDefault();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      let formErrors = {};
      console.log(formData);
      if (!formData.email) {
        formErrors = { ...formErrors, email: "Email Field is Required" };
      } else if (!emailRegex.test(formData.email)) {
        formErrors = { ...formErrors, email: "Please enter a valid email address" };
      }
      
      if (!formData.password) {
        formErrors = { ...formErrors, password: "Password Field is required" };
      }
      
      if (!formData.name) {
        formErrors = { ...formErrors, name: "Name Field is required" };
      }
    
      if (Object.keys(formErrors).length > 0) {
        setError(formErrors);
        return;
      }
      
      // Clear error state if there are no errors
      setError({ email: "", password: "", name: "" });
    
      try {
        const data = await register_me_company(formData); // Pass formData directly here
        setFormData("");
        if (data.success) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        toast.error("An error occurred while logging in");
      }
    };
    
      
 

      const handleJobSeekerRegister = async (e) => {
        console.log("regstering jobseeker");
          e.preventDefault();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
          let formErrors = {};
          if (!formData.email) {
            formErrors = { ...formErrors, email: "Email Field is Required" };
          } else if (!emailRegex.test(formData.email)) {
            formErrors = { ...formErrors, email: "Please enter a valid email address" };
          }
        
          if (!formData.password) {
            formErrors = { ...formErrors, password: "Password Field is required" };
          }
        
          if (!formData.name) {
            formErrors = { ...formErrors, name: "Name Field is required" };
          }
        
          if (Object.keys(formErrors).length > 0) {
            setError(formErrors);
            return;
          }
        
          // Clear error state if there are no errors
          setError({ email: "", password: "", name: "" });
        
          try{
            const data = await register_me_jobseeker(formData);
            setFormData("");
            console.log(formData);
            if (data.success) {
              toast.success(data.message);
              
              // setTimeout(() => {
              //   router.push("/auth/login");
              // }, 2000);
            } else {
              toast.error(data.message);
            }
          }catch(error){
            console.error("An error occurred:", error);
            toast.error("An error occurred while logging in");
          }
          
        };


  return (
    <>
      <section
        style={{ backgroundImage: `url(/images/bg/auth.jpg)` }}
        className="position-relative bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="lg:col-span-4">
              <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">
                <div className="text-center mx-auto">
                  <Link href="/">
                    <Image
                      src={"/images/logo.png"}
                      width={200}
                      height={24}
                      alt=""
                    />
                  </Link>
                </div>
                <div className=" my-auto">
                  <div className="mt-5 w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">
                    <Tabs defaultValue="jobseeker">
                      <TabsList>
                        <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
                        <TabsTrigger value="company">Company</TabsTrigger>
                      </TabsList>
                      <TabsContent value="jobseeker">
                        <div className="grid grid-cols-1">
                          <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">
                            Register as Jobseeker
                          </h5>
                          <form className="ltr:text-left rtl:text-right">
                            <div className="grid grid-cols-1">
                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="RegisterName"
                                >
                                  Your Name:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      name: e.target.value,
                                    })
                                  }
                                  id="RegisterName"
                                  type="email"
                                  className="form-input mt-3"
                                  placeholder="Harry"
                                />
                                {error.name && (
                                  <p className="text-sm text-red-500">
                                    {error.name}
                                  </p>
                                )}
                              </div>

                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="LoginEmail"
                                >
                                  Email Address:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  id="LoginEmail"
                                  type="email"
                                  className="form-input mt-3"
                                  placeholder="name@example.com"
                                />
                                {error.email && (
                                  <p className="text-sm text-red-500">
                                    {error.email}
                                  </p>
                                )}
                              </div>

                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="LoginPassword"
                                >
                                  Password:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      password: e.target.value,
                                    })
                                  }
                                  id="LoginPassword"
                                  type="password"
                                  className="form-input mt-3"
                                  placeholder="Password:"
                                />
                                {error.password && (
                                  <p className="text-sm text-red-500">
                                    {error.password}
                                  </p>
                                )}
                              </div>

                              <div className="flex justify-between mb-4">
                                <div className="inline-flex items-center">
                                  <input
                                    className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit"
                                    type="checkbox"
                                    value=""
                                    id="RememberMe"
                                  />
                                  <label
                                    className="form-check-label text-slate-400"
                                    htmlFor="RememberMe"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>

                              <div className="mb-4">
                                <Button
                                  onClick={handleJobSeekerRegister}
                                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
                                >
                                  Register
                                </Button>
                              </div>

                              <div className="text-center">
                                <span className="text-slate-400 dark:text-slate-300 me-2">
                                  Already have an account ?
                                </span>{" "}
                                <Link
                                  href="/auth/login"
                                  className="text-dark dark:text-white fw-bold"
                                >
                                  Sign in
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </TabsContent>
                      <TabsContent value="company">
                        <div className="grid grid-cols-1">
                          <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">
                            Register as Company
                          </h5>
                          <form className="ltr:text-left rtl:text-right">
                            <div className="grid grid-cols-1">
                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="RegisterName"
                                >
                                  Your Name:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      name: e.target.value,
                                    })
                                  }
                                  id="RegisterName"
                                  type="email"
                                  className="form-input mt-3"
                                  placeholder="Harry"
                                />
                              </div>

                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="LoginEmail"
                                >
                                  Email Address:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      email: e.target.value,
                                    })
                                  }
                                  id="LoginEmail"
                                  type="email"
                                  className="form-input mt-3"
                                  placeholder="name@example.com"
                                />
                              </div>

                              <div className="mb-4">
                                <label
                                  className="dark:text-white"
                                  htmlFor="LoginPassword"
                                >
                                  Password:
                                </label>
                                <input
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      password: e.target.value,
                                    })
                                  }
                                  id="LoginPassword"
                                  type="password"
                                  className="form-input mt-3"
                                  placeholder="Password:"
                                />
                              </div>

                              <div className="flex justify-between mb-4">
                                <div className="inline-flex items-center">
                                  <input
                                    className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit"
                                    type="checkbox"
                                    value=""
                                    id="RememberMe"
                                  />
                                  <label
                                    className="form-check-label text-slate-400"
                                    htmlFor="RememberMe"
                                  >
                                    Remember me
                                  </label>
                                </div>
                              </div>

                              <div className="mb-4">
                              <Button
                                  onClick={handleCompanyRegister}
                                  className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full"
                                >
                                  Register
                                </Button>
                              </div>

                              <div className="text-center">
                                <span className="text-slate-400 dark:text-slate-300 me-2">
                                  Already have an account ?
                                </span>{" "}
                                <Link
                                  href="/auth-login"
                                  className="text-dark dark:text-white fw-bold"
                                >
                                  Sign in
                                </Link>
                              </div>
                            </div>
                          </form>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                {/* <!-- Start Footer --> */}
                <div className="text-center">
                  <p className="text-gray-400">
                    © {new Date().getFullYear()} Next Step Careers.
                  </p>
                </div>
                {/* <!-- End Footer --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
