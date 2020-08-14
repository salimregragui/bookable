import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { StyleSheet, Text, View } from 'react-native';

import GlobalNavigator from './navigation/GlobalNavigator';
import AuthReducer from './store/reducers/auth';

const rootReducer = combineReducers({
    auth: AuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <GlobalNavigator />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
