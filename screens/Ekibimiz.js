import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UseEkip from '../hooks/UseEkip'
import {useNavigation} from '@react-navigation/native'
import EkipDetay from '../components/EkipDetay'


export default function Ekibimiz() {
  const navigation = useNavigation()
  const [searchEkip, ekip] = UseEkip()

  const data = ()=>{
    return ekip
  }
  return (
    <View>
      <Text style={styles.title}>Uzman Kadromuz</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginVertical: 15,
  }
})