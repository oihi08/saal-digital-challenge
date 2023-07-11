import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Tab } from 'types/types';

interface TabContextType {
  currentTab: Tab;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
}

interface TabProviderProps {
  children: ReactNode;
}
export const TabContext = createContext<TabContextType | undefined>(undefined);

export const TabProvider: React.FC<TabProviderProps> = ({ children }) => {
  const [currentTab, setCurrentTab] = useState<Tab>('supplies');

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  );
};

export const useTabContext = (): TabContextType => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTabContext must be used within a TabProvider');
  }
  return context;
};
