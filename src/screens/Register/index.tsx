import {connect} from "react-redux";
import { userType } from "../../utils/types";
import Register from "./Register";

import {registerUser} from "../../store/register";

const mapStateToProps = (state: any) => ({
    users : state.registerStore.users,
});

const mapDispatchToProps =  {
    addUser : (users: Array<userType>) => registerUser(users),
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
