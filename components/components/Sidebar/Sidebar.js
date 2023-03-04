import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import some from "lodash/some"

import { SIDEBAR_ITEMS } from "constants/SidebarItems"
import { getRoleById } from "services/api/roles"
import SidebarItem from "./SidebarItem"

const Sidebar = () => {
  let location = useLocation()
  let navigate = useNavigate()

  const currentUser = useSelector((state) => state.user.currentUser)
  const [roleData, setRoleData] = useState(null)

  const accessSidebarItems = useMemo(() => {
    if (!roleData) return

    return (
      SIDEBAR_ITEMS.filter((item) => {
        if (!item.apiKey) return true
        const controller = roleData?.permissions?.[item.apiKey]?.controllers?.[item.controllerKey]

        return controller && !some(Object.values(controller), ["enabled", false])
      }) || []
    )
  }, [roleData])

  useEffect(() => {
    ;(async () => {
      console.log('currentUser', currentUser)
      if (currentUser?.role) {
        const res = await getRoleById(currentUser?.role.id)
        if (res?.data) {
          setRoleData(res?.data?.role)
        }
      }
    })()
  }, [currentUser?.role])

  useEffect(() => {
    if (accessSidebarItems && location?.pathname) {
      const activeItem = SIDEBAR_ITEMS.find((item) =>
        item.url === "/" ? location?.pathname === "/" : location?.pathname?.startsWith(item.url)
      )
      if (activeItem && !accessSidebarItems?.find((item) => item.id === activeItem.id)) {
        // navigate("/")
      }
    }
  }, [accessSidebarItems, location?.pathname, navigate])

  return (
    <div className="w-sidebarWidth">
      <img src="/images/logo_.png" alt="logo" className="m-auto p-5" />
      <div className="max-h-sidebarHeight overflow-scroll space-y-8">
        {Array.isArray(accessSidebarItems) &&
          accessSidebarItems?.map((item) => <SidebarItem key={item.name} item={item} />)}
        
      </div>
    </div>
  )
}

export default Sidebar
