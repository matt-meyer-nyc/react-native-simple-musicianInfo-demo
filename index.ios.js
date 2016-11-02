//iOS code ...

//THIS IS THE ROOT COMPONENT (ONLY ONE THAT USES 'AppRegistry')

//import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//create component
/* original way was coded, not wrong, but...
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

...refactored, this could look like: */

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it to device
AppRegistry.registerComponent('albums', () => App);
