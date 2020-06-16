import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/friendsList";

const mapStateToProps = (state) => ({
    userList: state.userList,
    loading: state.userList.loading
})

const mapDispatchToProps = {
    getUsers
}
export const enhancer = connect(mapStateToProps, mapDispatchToProps)
