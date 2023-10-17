import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import UseResults from '../hooks/UseResults';
import TumKategoriler from '../components/TumKategoriler';



export default function Anasayfa() {
  const [searchApi, results, errorMessage] = UseResults()
  const [term, setterm] = useState('')
  
  const filterByCat = (price) =>{
    return results.filter((result)=>{
      return result.price !== price
      
    })
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setterm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : 
      <>
      {results.length == 0 ? <>
        <Text style={styles.notFound}>Hiçbir sonuç bulunamadı</Text>
      </> : <>
      <TumKategoriler title='Tüm Mekanlar' kategoriler={filterByCat('')} />
      </>
      } 
      </>
      }

    </View>
    
  );
}

const styles = StyleSheet.create({
  notFound:{
      textAlign: 'center',
      fontSize: 25,
      fontWeight: 'bold',
      marginVertical: 15,
  }
})