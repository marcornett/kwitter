import { connect } from "react-redux";
import { } from "../../redux/actions"; // add actions if needed

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({

});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {

};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
