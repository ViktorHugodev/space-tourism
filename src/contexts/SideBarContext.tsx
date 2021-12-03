import { createContext, ReactNode, useContext, useState } from "react";

interface SidebarContextData {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

interface SidebarProviderProps {
  children: ReactNode
}

const sidebarContextValues: SidebarContextData = {
  isSidebarOpen: false,
  toggleSidebar: () => { }
}

const SidebarContext = createContext<SidebarContextData>(sidebarContextValues)

export function useSidebar() {
  return useContext(SidebarContext)
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  const state = {
    isSidebarOpen,
    toggleSidebar: () => setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarContext.Provider value={state}>
      {children}
    </SidebarContext.Provider>
  )
}