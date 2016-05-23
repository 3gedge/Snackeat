'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-art-svg';
import Navbar from './Widgets/Navbar';
import layout from '../Styles/layout';
import style from '../Styles/style';
import {Actions} from 'react-native-router-flux';

export default class IdeaSkill extends Component {

  render() {
    return (
      <View style={layout.container}>

        <TouchableHighlight style={layout.bloc_ideas} onPress={()=>Actions.Os({})}>
          <View style={layout.bloc}>
            <View style={layout.bloc_img}>
              
            </View>
            <Text style={style.h3}>
              I have
            </Text>
            <Text style={style.h2}>
              An idea
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={layout.bloc_skills}>
          <View style={layout.bloc}>
            <View style={layout.bloc_img}>
              <Image style={layout.img_skills} source={require('./img/index/btn_skills.png')} />
            </View>
            <Text style={style.h3}>
              I have
            </Text>
            <Text style={style.h2}>
              Skills
            </Text>
          </View>
        </TouchableHighlight>

      </View>
    );
  }
}
