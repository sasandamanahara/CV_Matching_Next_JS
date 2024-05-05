
import SideBar from "../_components/sidebar"
import CompanyHeader from "../_components/header"
//import CardsGrid from "./cardsgrid"
import GraphSection from "./graphsection"
import Recentapplication from "./recentapplication"

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
            <h1 className="text-lg font-semibold md:text-2xl">DashBoard</h1>
          </div>
          <div className="flex-auto items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div>
           
              

            </div>
            <div>
            <span class="flex items-center m-3">
                  <span class="pr-6">Job Statistics</span>
                  <span class="h-px flex-1 bg-black"></span>
                </span>
                <GraphSection/>
             
            </div>
             <div >
             <span class="flex items-center m-3">
                  <span class="pr-6">Recent Application History</span>
                  <span class="h-px flex-1 bg-black"></span>
                </span>
              <Recentapplication/>
              </div>
              
           
          </div>
        </main>
      </div>
    </div>
  )
}