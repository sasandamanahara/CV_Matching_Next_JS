
import SideBar from "../../_components/sidebar"

import Appicantlist from "./appicantlist"

export default function Allapplicants() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SideBar/>
      </div>
      <Appicantlist/>
    </div>
  )
}
