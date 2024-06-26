'use client'
import React, { useEffect } from "react";
import Builder from "./builder";

import SideBar from "../../_components/sidebar"


import CompanyHeader from "../../_components/header"

const ResumeBuilder = () => {


  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <CompanyHeader/>
      <Builder/>
      </div>
    </div>
  
  
  );
};

export default ResumeBuilder;




