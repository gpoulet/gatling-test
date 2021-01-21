import { connect } from "react-redux";
import Home from "./Home";
import { AppDispatch } from "../../store";
import { loadUsers } from "../../actions";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
});

export default connect(undefined, mapDispatchToProps)(Home);
