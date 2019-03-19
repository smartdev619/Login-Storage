import {connect} from "react-redux";
import Login from "./Login";

const mapStateToProps = (state: any) => ({
    users : state.registerStore.users,
});

export default connect(mapStateToProps)(Login);
