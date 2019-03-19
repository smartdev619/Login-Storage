import { connect } from "react-redux";
import Login from "./Login";
import {userType} from "../../utils/types";
import {loginUser} from "../../store/auth";

const mapStateToProps = (state: any) => ({
    users: state.registerStore.users,
    user: state.authStore.user,
});

const mapDispatchToProps = {
    loginUser : (user: userType) => loginUser(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
