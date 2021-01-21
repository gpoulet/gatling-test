import {connect} from "react-redux";
import UserPosts from "./UserPosts";
import {AppDispatch, RootState} from "../../store";
import {getPostsByUserId} from "../../selectors";
import {loadPosts} from "../../actions";

type UserPostsOwnProps = {
    id: string
}

const mapStateToProps = (state: RootState, {id}: UserPostsOwnProps) => {
    return ({
        posts: getPostsByUserId(state, Number(id))
    });
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    loadPosts: () => dispatch((loadPosts()))
})


export default connect(mapStateToProps, mapDispatchToProps)(UserPosts)