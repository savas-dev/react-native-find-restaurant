import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.container}>
      <AntDesign style={styles.icon} name="search1" size={30} color="black" />
      <TextInput style={styles.inputSearch} placeholder='Ara...' autoCorrect={false} autoCapitalize='none' value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20,
    },
    inputSearch:{
        flex: 1,
        fontSize: 18,
    },
    icon:{
        marginHorizontal: 15,
    }
})