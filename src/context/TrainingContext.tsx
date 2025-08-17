"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

export type TrainingDataType = {
    title: string;
    desc: string;
}
type TrainingContextType = {
  showMetadata: TrainingDataType;
  setShowMetadata: React.Dispatch<React.SetStateAction<TrainingDataType>>;
};

const TrainingContext = createContext<TrainingContextType | undefined>(undefined);

export const TrainingProvider = ({ children }: { children: ReactNode }) => {
  const [showMetadata, setShowMetadata] = useState<TrainingDataType>({
    title: "",
    desc: "",
  });
  return (
    <TrainingContext.Provider value={{ showMetadata, setShowMetadata }}>
      {children}
    </TrainingContext.Provider>
  );
};

export const useTrainingContext = () => {
  const context = useContext(TrainingContext);
  if (!context) {
    throw new Error("useTrainingContext must be used within a TrainingProvider");
  }
  return context;
};
