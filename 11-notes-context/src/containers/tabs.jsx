import { connect } from "react-redux";
import Tabs from "../components/tabs/tabs.jsx";
// actions (actioncreator):
import { setActiveTab } from "../redux/actions/tabs.js";
// selectors:
import { getTabs, getActiveTabId } from "../redux/selectors/tabs.js";

const mapStateToProps = (state) => ({
  activeTabId: getActiveTabId(state), // now if 'setActiveTab(state)' is called again it will return the CACHED value
  tabs: getTabs(state),
});

//another method for 'connect'
// dispatches actions and provides them to their components
// it's optional - no need if there's no need to dispatch actions
// returns an object which will be passsed to the components as props
const mapDispatchToProps = (dispatch) => ({
  onSetActiveTab: (id) => () => dispatch(setActiveTab(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
