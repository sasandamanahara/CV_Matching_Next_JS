

import Profile from "./components/profile"
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
    <Tabs defaultValue="profile" className="w-[900px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="notification">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
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
            



          </CardContent>
          
        </Card>
      </TabsContent>
      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            
          </CardHeader>
          <CardContent className="space-y-2">
            




          </CardContent>
          
        </Card>
      </TabsContent>
    </Tabs>
  )
}
