import { connect } from "react-redux";
import UserCard from "./UserCard";
import { RootState } from "../../store";
import { getUserById } from "../../selectors";

type UserCardOwnProps = {
  id: string;
};

const mapStateToProps = (state: RootState, { id }: UserCardOwnProps) => {
  return {
    user: getUserById(state, Number(id)),
  };
};

export default connect(mapStateToProps)(UserCard);
