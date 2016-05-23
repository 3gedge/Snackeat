/**
 * EMB copyright
 * Edgard Mbayen
 * 02/2016
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    StatusBar
} from 'react-native';

import RootRouter from '../Components/RootRouter';
StatusBar.setBarStyle('light-content');

class Appser extends Component {
  render() {
      return (
          <RootRouter />
      );
  }
}

AppRegistry.registerComponent('Appser', () => Appser);

module.exports = AppserWeb;
