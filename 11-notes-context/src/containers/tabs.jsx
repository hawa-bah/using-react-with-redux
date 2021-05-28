import { connect } from "react-redux";
import Tabs from "../components/tabs/tabs.jsx";
import { setActiveTab } from "../redux/actions/tabs.js";
//selectors:
import { getTabs, getActiveTabId } from "../redux/selectors/tabs.js";

const mapStateToProps = (state) => ({
  activeTabId: getActiveTabId(state), // now if 'setActiveTab(state)' is called again it will return the CACHED value
  tabs: getTabs(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSetActiveTab: (id) => () => dispatch(setActiveTab(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
