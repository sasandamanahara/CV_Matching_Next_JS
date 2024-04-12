

import Profile from "./components/profile"
import Logindetails from "./components/security"
import Notification from "./components/notifications"
import SideBar from "../_components/sidebar"
import CompanyHeader from "../_components/header"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function TabsDemo() {
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
        <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            
            
          </div>
          <Tabs defaultValue="profile" className="w-[900px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notification">Notifications</TabsTrigger>
        <TabsTrigger value="security">Login Details</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            <Profile/>
          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="notification">
        <Card>
          <CardHeader>
            <CardTitle>Notification</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            <Notification/>



          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="security">
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
       
        </div>
      </main>
    </div>
  </div>
    
  )
}
