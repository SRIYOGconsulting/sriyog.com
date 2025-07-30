"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type FloatingIconsContextType = {
  showFloatingIcons: boolean;
  setShowFloatingIcons: React.Dispatch<React.SetStateAction<boolean>>;
};

const FloatingIconsContext = createContext<FloatingIconsContextType | undefined>(undefined);

export const FloatingIconsProvider = ({ children }: { children: ReactNode }) => {
  const [showFloatingIcons, setShowFloatingIcons] = useState(false);
  return (
    <FloatingIconsContext.Provider value={{ showFloatingIcons, setShowFloatingIcons }}>
      {children}
    </FloatingIconsContext.Provider>
  );
};

export const useFloatingIcons = () => {
  const context = useContext(FloatingIconsContext);
  if (!context) {
    throw new Error("useFloatingIcons must be used within a FloatingIconsProvider");
  }
  return context;
};
