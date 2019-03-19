import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { PersistGate } from "redux-persist/integration/react";

import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Dashboard from "./src/screens/Dashboard";
import configureStore from "./src/store/configureStore";

const { store, persistor } = configureStore();


const AppNavigator = createStackNavigator({
  Login,
  Register,
  Dashboard,
});

let Navigation = createAppContainer(AppNavigator);

export default class App extends React.Component {
  public render() {
    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </Root>
    );
  }
}