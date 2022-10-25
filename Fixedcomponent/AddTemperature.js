import { View, Text } from 'react-native'
import React from 'react'

const AddTemperature = () => {
  return (
    <View  style={{marginTop:40,alignItems:"flex-end"}}>
       <Text  style={{fontSize:63}}>13°</Text>  
       <Text  style={{fontSize:12,color:"#BDBCE1",right:10}}>Rainy Shower</Text>  
    </View>
  )
}

export default AddTemperature