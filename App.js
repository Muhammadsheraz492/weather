import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>First</Text>
      <Animated.View style={styles.SecondConatiner}>
        <Text>Second</Text>
      </Animated.View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0049FF",
    justifyContent: "center",
    alignItems: "center"

  },
  SecondConatiner: {
    position: "absolute",
    flexGrow: 1,
    backgroundColor: "#fff",
    top: 0,
    bottom: 0,
    borderRadius:20,
    right: 0,
    left: 0,
    marginTop:55,
    // padding:150,
    transform: [
      {translateX:100},
      {rotate:'10deg'}
  
  
  ]
  }

})