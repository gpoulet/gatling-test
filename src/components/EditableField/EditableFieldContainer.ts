import {connect} from "react-redux";
import {AppDispatch} from "../../store";
import {updateUsername} from "../../actions";
import EditableField from "./EditableField";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    updateUsername: (id: number, name: string) => dispatch((updateUsername(id, name)))
})


export default connect(undefined, mapDispatchToProps)(EditableField)