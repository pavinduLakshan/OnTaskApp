/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import DrawerNavigator from './Utils/DrawerNavigator'
import {
  createAppContainer
} from 'react-navigation';

const App = createAppContainer(DrawerNavigator);

export default App;

