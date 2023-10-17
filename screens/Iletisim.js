import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'


export default function Iletisim() {
 

  return (
    <View style={styles.container}>
      <Text>İletişim</Text>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    width: '100%',
  },
  img:{
    marginVertical: 20,
    alignSelf: 'center',
  },
  adres:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  adresText:{
    textAlign: 'center',
    fontSize: 20,
  },
  telefon:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  telefonText:{
    fontSize: 20,
    textAlign: 'center',
  },
  eposta:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  epostaText:{
    fontSize: 20,
    textAlign: 'center',
  }
})