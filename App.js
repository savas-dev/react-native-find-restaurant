import "react-native-gesture-handler"
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons"

import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native'
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";

import Backup from './screens/Backup'
import Anasayfa from './screens/Anasayfa'
import Ekibimiz from './screens/Ekibimiz'
import Hakkimizda from './screens/Hakkimizda'
import Iletisim from './screens/Iletisim'
import MakaleSayfasi from "./screens/MakaleSayfasi";
import EkipSayfasi from "./screens/EkipSayfasi";
import { useEffect } from "react";
import SplashScreen from 'react-native-splash-screen'


const Drawer = createDrawerNavigator()

export default function App() {

  useEffect(() =>{
    if(Platform.OS === "android")
    SplashScreen.Hide()
  }, [])
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View style={{
                  height: 200,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <Text style={{
                    fontSize: 22,
                    marginVertical: 6,
                    fontWeight: 'bold',
                    color: '#111'
                  }}>
                    Mekan Bul
                  </Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#FFF',
            width: 250
          },
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          drawerActiveTintColor: 'blue',
          drawerLabelStyle: {
            color: '#111'
          }
        }}
      >
        <Drawer.Screen
          name="Mekan Listesi"
          options={{
            drawerLabel: 'Mekanlar',
            title: 'Mekanlar',
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color='#808080' />
            )
          }}
          component={Anasayfa}
        />

        <Drawer.Screen
          name="Hakkımızda"
          options={{
            drawerLabel: 'Hakkımızda',
            title: 'Hakkımızda',
            drawerIcon: () => (
              <SimpleLineIcons name="info" size={20} color='#808080' />
            )
          }}
          component={Hakkimizda}
        />

        <Drawer.Screen
          name="Ekibimiz"
          options={{
            drawerLabel: 'Ekibimiz',
            title: 'Ekibimiz',
            drawerIcon: () => (
              <SimpleLineIcons name="people" size={20} color='#808080' />
            )
          }}
          component={Ekibimiz}
        />

        <Drawer.Screen
          name="İletişim"
          options={{
            drawerLabel: 'İletişim',
            title: 'İletişim',
            drawerIcon: () => (
              <SimpleLineIcons name="phone" size={20} color='#808080' />
            )
          }}
          component={Iletisim}
        />

        <Drawer.Screen
          name="Mekanlar"
          options={{
            title: 'Mekanlar',
            drawerItemStyle: { display: 'none' }
          }}
          component={MakaleSayfasi}
        />

        <Drawer.Screen
          name="EkipSayfasi"
          options={{
            title: 'Ekibimiz',
            drawerItemStyle: { display: 'none' }
          }}
          component={EkipSayfasi}
        />

      </Drawer.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
