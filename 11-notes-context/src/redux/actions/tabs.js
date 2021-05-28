import { tabs as actionTypes } from "./action-types.js";

// this is an ACTIONCREATOR: function that returns an action
export const setActiveTab = (id) => ({
  type: actionTypes.setActiveTab,
  id, // this is the same as id: id
});
