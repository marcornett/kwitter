import { connect } from "react-redux";
import { getMessages, updateAfterPosting } from "../../redux/actions/messages";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages,
        // id: state.messages.id,
        // text: state.messages.text, 
        // username: state.messages.username, 
        // createdAt: state.messages.createdAt, 
        // likes: state.messages.likes
    }
};

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
    getMessages, updateAfterPosting
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
