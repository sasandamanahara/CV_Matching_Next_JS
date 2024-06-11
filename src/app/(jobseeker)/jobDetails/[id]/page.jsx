
import SideBar from "../../_components/sidebar"
import JobSeekerHeader from "../../_components/header"
import JobDetails from "./jobdetails"

export default function JobDetailsPage() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <JobSeekerHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Job Details</h1>
          </div>
          <div>
              <JobDetails/>
            </div>
      
        </main>
      </div>
    </div>
  )
}
