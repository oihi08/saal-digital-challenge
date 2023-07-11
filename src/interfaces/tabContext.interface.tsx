import React from 'react';
import { Tab } from 'types/types';

export interface TabContextType {
  currentTab: Tab;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
}
