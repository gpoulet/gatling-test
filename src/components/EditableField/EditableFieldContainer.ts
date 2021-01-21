import {connect} from "react-redux";
import {AppDispatch} from "../../store";
import {updateName} from "../../actions";
import EditableField from "./EditableField";

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    updateName: (id: number, name: string) => dispatch((updateName(id, name)))
})

export default connect(undefined, mapDispatchToProps)(EditableField)