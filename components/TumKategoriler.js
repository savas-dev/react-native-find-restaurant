import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import KategoriDetay from './KategoriDetay'
import {useNavigation} from '@react-navigation/native'

export default function TumKategoriler({title, kategoriler}) {
    const navigation = useNavigation()
  return (
    <View style={{paddingBottom: 150}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
      showsVerticalScrollIndicator={false}
      data={kategoriler}
      renderItem={({item})=>{
        return (
            <TouchableOpacity onPress={()=>
            navigation.navigate('Mekanlar', {id: item.id})}>
                <KategoriDetay props={item}/>
            </TouchableOpacity>
        )
      }}
      />
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