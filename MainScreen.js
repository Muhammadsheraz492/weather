import { Animated, SafeAreaView, StatusBar, StyleSheet, Image, Text, Touchable, TouchableOpacity, View, ScrollView, } from 'react-native'
import React, { useRef, useState } from 'react'
import Location from './assets/location.svg'
import Settings from './assets/settings.svg'
import Plus from './assets/plus.svg'
import Menu from './assets/menu.svg'
import Wind from './assets/wind.svg'
import Cloud from './assets/cloud.svg'
import Cloud2 from './assets/cloud3.svg'
import Water_Drop from './assets/water-drop.svg'
import Flash_cloud from './assets/flash_cloud.svg'
import { useNavigation } from '@react-navigation/native'
import { getCurrentDate } from './Fixedcomponent/GetDate'
import AddTemperature from './Fixedcomponent/AddTemperature'
import Rainy from './assets/rainy.svg'
const Data = [{ "Icon": Wind, txt: "19km/h" }, { "Icon": Cloud, txt: "75%" }, { "Icon": Water_Drop, txt: "85%" }]
const Data2 = [
  { time: "12:00am", Icon: Flash_cloud, tem: "10°" },
  { time: "12:00am", tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
  { time: "12:00am", Icon: Cloud2, tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
  { time: "12:00am", Icon: Rainy, tem: "10°" },
]
const Data3= [
  { time: "Moday   ", Icon: Flash_cloud, tem: "10°" },
  { time: "Tuesday ", Icon: Rainy, tem: "30°" },
  { time: "Wenesday", Icon: Cloud2, tem: "20°" },
  { time: "Thursday", Icon: Rainy, tem: "30°" },
  { time: "Friday  ", Icon: Rainy, tem: "23°" },
  { time: "Saturday", Icon: Rainy, tem: "5°" },
  { time: "Sunday  ", Icon: Rainy, tem: "3°" },
]
const MainScreen = () => {
  const navigation=useNavigation()
  const animatedValue = useRef(new Animated.Value(0)).current
  const [index, setindex] = useState('')
  const date = getCurrentDate()
  const move = (toValue) => Animated.timing(animatedValue, {
    toValue,
    duration: 400,
    useNativeDriver: false
  }).start()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
     
        <View style={{ width: '90%', height: '40%', alignSelf: "center", justifyContent: "flex-end", }}>
          <TouchableOpacity style={{ width: "35%", flexDirection: "row", justifyContent: "space-around", bottom: 20, left: 12 }}>
            <Plus />
            <Text>Add location</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ width: "35%", flexDirection: "row", justifyContent: "space-around", left: 5 }}
          onPress={()=>{
            setindex(index == 0 ? 1 : 0)
            index == 0 ? move(1) : move(0)
            navigation.navigate("Setting")
          }}
          >
            <Settings />
            <Text>Settings</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ width: "35%", flexDirection: "row", justifyContent: "space-around", top: 20 }}>
            <Location />
            <Text>Maps</Text>

          </TouchableOpacity>
        </View>
        <Animated.View style={[styles.SecondConatiner, {
          borderRadius: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 10, 20]
          }),
          marginTop: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 20, 40]
          }),
          transform: [
            { perspective: 400 },

            {
              translateX: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [1, 50, 150]
              })
            },
            {
              rotate: animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '5deg', '14deg']
              })
            }

          ]
        }]}>

          <TouchableOpacity
            // style={{padding:20}}
            onPress={() => {
              setindex(index == 0 ? 1 : 0)
              index == 0 ? move(1) : move(0)
            }}
          >
            <Menu />
          </TouchableOpacity>
          <View style={{ paddingVertical: 5 }}>
            <Text>Today</Text>
            <Text style={{ fontSize: 36, fontWeight: "600" }}>London</Text>
            <Text>{date}</Text>
            <View style={{ width: "70%", alignSelf: "center", bottom: 10 }}>
              <AddTemperature />


            </View>
            <View style={{ marginTop: 15, height: 60, width: "100%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
              {Data.map((Element, i) => (
                <View key={i.toString()}>
                  <View style={{ height: 44, width: 44, backgroundColor: "#F4F4F8", borderRadius: 12, justifyContent: "center", alignItems: "center" }}>
                   
                    <Element.Icon />
                  </View>
                  <Text style={{ marginTop: 10, textAlign: "center" }}>{Element.txt}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={{ marginTop: 5, marginBottom: 5 }}>
            <Text style={{ fontSize: 16, fontWeight: "500", color: "#000" }}>Today</Text>
          </View>
          <ScrollView
            // style={{backgroundColor:"#000"}}
            showsVerticalScrollIndicators={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          // style={{flexDirection:"row",justifyContent:"space-evenly"}}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>

              {Data2.map((Element, i) => (
                <View key={i.toString()} style={{ width: 68, height: 110, backgroundColor: Element.Icon ? "transparent" : "#0049FF", borderRadius: 10, borderTopRightRadius: 30, borderBottomLeftRadius: 30, alignItems: "center", justifyContent: "space-evenly" }}>
                  <Text style={{ fontSize: 8, color: Element.Icon ? "#000" : "#fff" }}>12:00 am</Text>
                  {Element.Icon ? <Element.Icon /> : <View style={{ height: 13 }} />}
                  <Text style={{ fontSize: 8, color: Element.Icon ? "#000" : "#fff" }}>12:00 am</Text>
                </View>
              ))

              }
            </View>
          </ScrollView>
          <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{ width: "90%", alignSelf: "center", height: index==0?270:230, backgroundColor: "#F3F3FF", borderTopRightRadius: 60,borderBottomLeftRadius:60 }}>

            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={{ marginTop: 10, fontSize: 15, fontWeight: "400" }}>Next Days</Text>
              <View  style={{flex:1,alignItems:"center"}}>

                {Data3.map((Element, i) => (
                  <View key={i.toString()} style={{ width: "100%",marginTop:10, flexDirection: "row",  alignItems: "center", justifyContent: "space-evenly" }}>
                    <Text style={{ fontSize: 10, color: Element.Icon ? "#000" : "#fff" }}>{Element.time}</Text>
                    <View style={{width:30,height:30,justifyContent:"center",alignItems:"center"}}>
                    <Element.Icon />
                     </View>
                    <Text style={{ fontSize: 8, color: Element.Icon ? "#000" : "#fff" }}>{Element.tem}</Text>
                  </View>
                ))

                }
              </View>
            </View>
          </ScrollView>


        </Animated.View>
      </View>

    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center"

  },
  SecondConatiner: {
    position: "absolute",
    flexGrow: 1,
    padding: 10,
    backgroundColor: "#fff",
    top: 0,
    bottom: 0,
    borderRadius: 20,
    right: 0,
    left: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 4,
      height: 30
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    // marginTop: 550,
    // padding:150,
    //   transform: [
    //     {translateX:120},
    //     {rotate:'14deg'},
    //     // {scaleX:1.5}


    // ]
  }

})