import { Animated, SafeAreaView,StatusBar, StyleSheet,Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import location from './assets/location.png'
import { SvgCss, Svg, Circle } from "react-native-svg";
import Plus from './assets/plus.svg'
const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current
  const [index, setindex] = useState('')
  const move = (toValue) => Animated.timing(animatedValue, {
    toValue,
    duration: 400,
    useNativeDriver: false
  }).start()
  return (
    <SafeAreaView  style={{flex:1}}>
    <View style={styles.container}>
    <StatusBar
        animated={true}
        backgroundColor="#000"
     
       />
  <View style={{width:'90%',height:'40%',alignSelf:"center",justifyContent:"flex-end"}}> 
  <View style={{display:"flex",flexDirection:"row"}}>
    <Plus />
    <Text>Add location</Text>

  </View>
    <Text>Add location</Text>
    <Text>Add location</Text>
  </View>
      <Animated.View style={[styles.SecondConatiner, {
        borderRadius:animatedValue.interpolate({
          inputRange:[0,0.5,1],
          outputRange:[0,10,20]
        }),
        marginTop:animatedValue.interpolate({
          inputRange:[0,0.5,1],
          outputRange:[0,20,40]
        }),
        transform: [
          {perspective: 400},

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
          onPress={()=>{
            setindex(index==0?1:0)
            index==0?move(1):move(0)
          } }
        >
          
          <Text>Second</Text>

        </TouchableOpacity>
      </Animated.View>
    </View>
    
</SafeAreaView>
  )
}

export default App

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