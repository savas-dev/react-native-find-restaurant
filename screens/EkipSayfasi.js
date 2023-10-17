import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import backend from '../api/backend'

export default function EkipSayfasi({route}) {
    const [cevap, setcevap] = useState(null)
    const id = route.params.id

    const verileriCek = async(id)=>{
        const response = await backend.get(`/ekip/${id}`)
        setcevap(response.data)
    }

    useEffect(()=>{
        verileriCek(id)
    }, [id])
    if(!cevap){
        return null
    }

  return (
    <View>
      <Text>sss</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '98%',
    },
    img:{
        width: '100%',
        height: 500,
        marginBottom: 30,
        marginTop: 20,
    },
    name:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    desc:{
        marginTop: 20,
        textAlign: 'center',
        fontSize: 18,
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