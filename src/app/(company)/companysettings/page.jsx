'use client';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import React, { useEffect } from 'react';

import SideBar from "../_components/sidebar"
import CompanyHeader from "../_components/header"
import Overview from "./overview"
import Logindetails from './security';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



function MyApp({ Component, pageProps }) {

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <CompanyHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
          </div>
          <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
            
              
            <Provider store={store}>
            <Tabs defaultValue="overview" className="flex-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="logindetails">Login Details</TabsTrigger>
        
      </TabsList>
      <TabsContent value="overview">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
           <Overview/>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="logindetails">
        <Card>
          <CardHeader>
            <CardTitle>Login Details</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            
           <Logindetails/>
          </CardContent>
          
        </Card>
      </TabsContent>
      
    </Tabs>
            </Provider>
           
          </div>
        </main>
      </div>
    </div>
  
    
  );
}

export default MyApp;