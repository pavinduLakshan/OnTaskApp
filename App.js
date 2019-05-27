/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
  createAppContainer
} from 'react-navigation';
import AppNavigator from './AppNavigator'

const App = createAppContainer(AppNavigator);

export default App;

