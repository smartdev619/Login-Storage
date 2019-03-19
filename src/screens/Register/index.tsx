import {connect} from "react-redux";
import Register from "./Register";

import {registerUser} from "../../store/register";

const mapStateToProps = (state: any) => ({
    users : state.registerStore.users,
});

const mapDispatchToProps =  {
    addUser : (users: any) => registerUser(users),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
