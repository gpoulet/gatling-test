import {connect} from "react-redux";
import Stats from "./Stats";
import {getNumberOfUserLivingInAnApt, getnumberOfUserLivingInASuite} from "../../selectors";
import {RootState} from "../../store";

const mapStateToProps = (state: RootState) => ({
    numberOfUserLivingInAnApt: getNumberOfUserLivingInAnApt(state),
    numberOfUserLivingInASuite: getnumberOfUserLivingInASuite(state)
})

export default connect(mapStateToProps)(Stats)