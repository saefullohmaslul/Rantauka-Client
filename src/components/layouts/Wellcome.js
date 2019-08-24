import React, { Component } from 'react'
import { Text, View, ActivityIndicator, StatusBar, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

export default class Wellcome extends Component {
  constructor() {
    super()
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('@token')

    this.props.navigation.navigate(userToken ? 'Logged' : 'Guest')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}
