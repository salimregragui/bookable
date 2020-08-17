import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import GlobalNavigator from './navigation/GlobalNavigator';
import AuthReducer from './store/reducers/auth';
import SearchReducer from './store/reducers/search';

const rootReducer = combineReducers({
    auth: AuthReducer,
    search: SearchReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'poppins': require('./assets/fonts/Poppins-Regular.otf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.otf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.otf'),
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return <AppLoading startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)} 
        onError={(err) => console.log(err)} />
  }

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
