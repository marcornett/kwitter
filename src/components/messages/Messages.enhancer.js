import { connect } from "react-redux";
import { getMessages, addLike, unLike } from "../../redux/actions/messages";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        likes: state.messages.messages.likes,
        id: state.likes.id
    }
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
    getMessages, addLike, unLike
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
