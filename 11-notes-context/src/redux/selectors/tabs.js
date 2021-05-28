import { createSelector } from "reselect";

// the selector is a function that returns the relevant state
export const getTabs = (state) => state.tabs;

//another seletctor function
export const getActiveTab = createSelector(
  // 1st argument: get tabs state
  getTabs,
  // 2nd argument: actual function
  // this tabs comes from the previous argument
  (tabs) => tabs.find((tab) => tab.isActive)
);

//selector:
export const getActiveTabId = createSelector(
  getActiveTab,
  (activeTab) => activeTab.id
);
