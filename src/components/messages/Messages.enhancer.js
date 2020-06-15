import { connect } from "react-redux";
import { getMessages, postMessage, addLike, unLike, getUserPicture } from "../../redux/actions/messages";

const mapStateToProps = (state) => ({
    messages: state.messages.messages,
    likes: state.messages.messages.likes,
    id: state.likes.id,
    userPicture: state.messages.user
});

const mapDispatchToProps = {
    getMessages,
    postMessage,
    addLike,
    unLike,
    getUserPicture
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
