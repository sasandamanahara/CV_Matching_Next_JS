"use client"; // This is a client component
import React, { useEffect, useState } from 'react'
import Link from "next/link";

import Image from "next/image";
import "../assets/css/tailwind.css";
import "../assets/scss/tailwind.scss";
import "../assets/scss/icons.scss";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from 'react-scroll';
import { login_me } from '../../(company)/Services/auth';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../(company)/Utils/UserSlice';
import { useRouter } from "next/navigation";

/**
 * Login component
 */
export default function Login() {
    const dispatch = useDispatch();
    const router = useRouter();
    
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });

    const handleJobSeekerLogin = async (e) => {

        e.preventDefault();
        if (!formData.email) {
          setError({ ...error, email: "Email Field is Required" })
          return;
        }
        if (!formData.password) {
          setError({ ...error, password: "Password Field is required" })
          return;
        }
    
        const res = await login_me(formData);
        if(res.success)
        {
          Cookies.set('token', res?.finalData?.token);
          localStorage.setItem('user', JSON.stringify(res?.finalData?.user));
          dispatch(setUserData(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null));
          console.log("login success");
          router.push('/companydashboard');
        }
        else
        {
          toast.error(res.message);
        }
      }


    return (
        <>
            <sections
                 style={{ backgroundImage: `url(/images/bg/auth.jpg)` }}
                className="position-relative bg-center bg-cover">
                <div className="absolute inset-0 bg-black opacity-90"></div>
                <div className="container-fluid relative">
                   <div className="grid grid-cols-1">
                        <div className="lg:col-span-4">
                            <div className="flex flex-col min-h-screen md:px-12 py-12 px-3">
                                <div className="text-center mx-auto">
                                    <Link href="/"><Image  src={"/images/logo.png"} width={200} height={24} alt=""/></Link>
                                  
                                </div>
                                <div className=" my-auto">
       
                                      <div className="mt-5 w-full max-w-sm m-auto px-6 py-8 bg-white dark:bg-slate-900 rounded-md shadow-lg shadow-slate-500 dark:shadow-slate-800">


                                      <Tabs defaultValue="jobseeker" >
                                      <TabsList>
                                        <TabsTrigger value="jobseeker">Job Seeker</TabsTrigger>
                                        <TabsTrigger value="company">Company</TabsTrigger>
                                      </TabsList>
                                      <TabsContent value="jobseeker">

                                      <div className="grid grid-cols-1">
                                            <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">Login as Job Seeker</h5>
                                            <form className="ltr:text-left rtl:text-right">
                                                <div className="grid grid-cols-1">
                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginEmail">Email Address:</label>
                                                        <input onChange={(e) => setFormData({ ...formData, email: e.target.value })}  id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginPassword">Password:</label>
                                                        <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:" />
                                                    </div>

                                                    <div className="flex justify-between mb-4">
                                                        <div className="inline-flex items-center">
                                                            <input className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit" type="checkbox" value="" id="RememberMe" />
                                                            <label className="form-check-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                                        </div>

                                                        <p className="text-slate-400 mb-0"><Link href="/auth-reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                                    </div>

                                                    <div className="mb-4">
                                                        <Button onClick={handleJobSeekerLogin} className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Login</Button>
                                                    </div>

                                                    <div className="text-center">
                                                        <span className="text-slate-400 dark:text-slate-300 me-2">Dont have an Accounts</span> <Link href="/auth/register" className="text-dark dark:text-white fw-bold">Sign Up</Link>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                      </TabsContent>
                                      <TabsContent value="company">
                                      
                                        <div className="grid grid-cols-1">
                                            <h5 className="mb-8 text-xl dark:text-white font-semibold text-center">Login as Company</h5>
                                            <form className="ltr:text-left rtl:text-right">
                                                <div className="grid grid-cols-1">
                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginEmail">Email Address:</label>
                                                        <input id="LoginEmail" type="email" className="form-input mt-3" placeholder="name@example.com" />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label className="dark:text-white" htmlFor="LoginPassword">Password:</label>
                                                        <input id="LoginPassword" type="password" className="form-input mt-3" placeholder="Password:" />
                                                    </div>

                                                    <div className="flex justify-between mb-4">
                                                        <div className="inline-flex items-center">
                                                            <input className="form-checkbox text-orange-600 rounded w-4 h-4 me-2 border border-inherit" type="checkbox" value="" id="RememberMe" />
                                                            <label className="form-check-label text-slate-400" htmlFor="RememberMe">Remember me</label>
                                                        </div>

                                                        <p className="text-slate-400 mb-0"><Link href="/auth-reset-password" className="text-slate-400">Forgot password ?</Link></p>
                                                    </div>

                                                    <div className="mb-4">
                                                        <Link href="#" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md w-full">Login / Sign in</Link>
                                                    </div>

                                                    <div className="text-center">
                                                        <span className="text-slate-400 dark:text-slate-300 me-2">Dont have an Accounts</span> <Link href="/auth-signup" className="text-dark dark:text-white fw-bold">Sign Up</Link>
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
                                    <p className="text-gray-400">© {new Date().getFullYear()} Next Step Careers.</p>
                                </div>
                                {/* <!-- End Footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </sections>
           
        </>
    )

}
