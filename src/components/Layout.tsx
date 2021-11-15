import React, { useEffect, useState } from "react"
import { LayoutProps } from "types/components"
import Header from "./Header"
import Meta from "./Meta"

const Layout = ({ children, isDetails }: LayoutProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)
  const [bookedItem, setBookedItem] = useState<string | null>(null)
  const handleToggleMenuView = () => {
    setToggleMenu((prevState) => {
      const mainTag = document.getElementsByTagName("main")[0]?.classList
      !prevState
        ? mainTag?.add("table-column-group")
        : mainTag?.remove("table-column-group")
      return !prevState
    })
  }

  useEffect(() => {
    setBookedItem(window.localStorage.getItem("bookedItem"))
  }, [])

  return (
    <>
      <Meta />
      <Header
        isDetails={isDetails}
        handleToggleMenuView={handleToggleMenuView}
        toggleMenu={toggleMenu}
        bookedItem={bookedItem}
      />
      {children}
    </>
  )
}

export default Layout
