
import SideBar from "../_components/sidebar"
import CompanyHeader from "../_components/header"
import Appicantlist from "./appicantlist"

export default function DashBoard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <div className="flex flex-col">
        <CompanyHeader/>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">All Applicants</h1>
          </div>
          <div className="flex flex-3 items-left justify-center rounded-lg border border-dashed shadow-sm">
            
              
              <Appicantlist/>
            
          </div>
        </main>
      </div>
    </div>
  )
}
