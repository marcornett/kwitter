import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import { getUser } from "../../redux/actions/users"

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  login,
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
