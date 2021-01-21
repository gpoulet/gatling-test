import { connect } from "react-redux";
import UserDetails from "./UserDetails";
import { AppDispatch, RootState } from "../../store";
import { getUsers } from "../../selectors";
import { loadUsers } from "../../actions";

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    users: getUsers(state),
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
