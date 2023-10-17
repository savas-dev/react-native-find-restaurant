import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'

export default function Hakkimizda() {

  return (
    <View style={styles.container}>
      <Text>Hakkımızda</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width: '95%',
  },
  img:{
    marginVertical: 20,
    alignSelf: 'center',
    height: 250,
    width: '100%',
  },
  content:{
      fontSize: 18,
      marginVertical: 15,
      textAlign: 'center',
  }
})