import { connect } from "react-redux";
import { getMessages, addLike} from "../../redux/actions/messages";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
    }
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
     getMessages, addLike
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
