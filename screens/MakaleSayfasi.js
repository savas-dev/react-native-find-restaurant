import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import backend from '../api/backend'
import { AntDesign } from '@expo/vector-icons'; 



export default function MakaleSayfasi({ route }) {
    const [cevap, setcevap] = useState(null)
    const id = route.params.id

    const verileriCek = async (id) => {
        const response = await backend.get(`/${id}`)
        setcevap(response.data)
    }


    useEffect(() => {
        verileriCek(id)
    }, [id])
    if (!cevap) {
        return null
    }

    return (
        <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.container}
        >
            <Text style={styles.title}>{cevap.name}</Text>
            <Image style={styles.img} source={{ uri: cevap.image_url }} />
            <Text style={styles.title}>{cevap.display_phone}</Text>
            <Text style={styles.title}>{cevap.display_address}</Text>
            
            <Image style={styles.img2} source={{uri: cevap.photos[0]}} />
            <Image style={styles.img2} source={{uri: cevap.photos[1]}} />
            <Image style={styles.img2} source={{uri: cevap.photos[2]}} />
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    img: {
        width: '95%',
        height: 250,
        alignSelf: 'center',
        borderRadius: 30,
    },
    img2:{
        width: '80%',
        height: 150,
        alignSelf: 'center',
        borderRadius: 30,
        marginVertical: 25,
    },  
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
    },
    content: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 15,
    },
    author:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        paddingTop: 15,
        backgroundColor: 'lightgray',
    },
    readView:{
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        width: '100%',
        justifyContent: 'center',
        height: 50,
    },
    viewCount:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewText:{
        fontSize: 14,
    }
})