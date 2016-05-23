/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet
} = React;

module.exports = StyleSheet.create({
	layout: {
		position: 'absolute',
		top:0,
		left:0,
		right: 0,
		bottom: 0
	},
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  bloc: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloc_img: {
    justifyContent: 'center',
    width: 180,
    height: 315
  },
  bloc_skills: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2E5351'
  },
  bloc_ideas: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#53928F'
  },
  img_idea: {
    width: 180,
    height: 313
  },
  img_skills: {
    width: 180,
    height: 246
  }
});
