import { connect } from "react-redux";
import UsersTable from "./UsersTable";
import { getUsers } from "../../selectors";
import { RootState } from "../../store";

const mapStateToProps = (state: RootState) => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(UsersTable);
