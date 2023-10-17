import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function KategoriDetay({props}) {
  return (
    <View style={styles.container}>
      <Image style={styles.featured} source={ props.image_url ? { uri: props.image_url }: null} />
      <Text style={styles.title}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        marginVertical: 20,
    },
    featured:{
        width: '100%',
        height: 200,
        borderRadius: 15
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    author:{
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    }
})