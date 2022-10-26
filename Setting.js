import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Search from './assets/feather-search.svg'
import PLus from './assets/plus.svg'
 
const Setting = () => {
  const Data=[
    {tem:"06°",city:"Tokyo",color:"#00DBBD"},
    {tem:"19°",city:"New York",color:"#B900CC"},
    {tem:"13°",city:"London",color:"#0049FF"},
   
  ]
  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
      <View style={{ width: "90%", alignSelf: "center" }}>

        <View style={{ height: "25%", width: "100%", justifyContent: "space-evenly" }}>

          <View>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>Find Location</Text>
          </View>
          <View style={{ height: 37, width: "100%", borderWidth: 2, borderColor: "#E4E4EE", borderRadius: 20, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <View style={{ width: "85%" }}>
              <TextInput
              placeholderTextColor={"#8D8CE1"}
              // placeholderTextSize
              fontSize={12}
              
                placeholder="Search your location"
              />
            </View>
            <View style={{ width: "10%", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
              onPress={()=>console.log("This is Search Button")}
              >

                <Search />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "400" }}>Cities</Text>
          </View>
        </View>
        <View style={{ height: "75%", width: "100%",justifyContent:"space-evenly" }}>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={{height:"100%"
    
    }}>
        <View style={{justifyContent:"space-evenly",}}>

        {Data.map((Element,i)=>(
          
          <View key={i.toString()}  style={{marginTop:10,height:125,width:"100%",backgroundColor:Element.color,borderTopRightRadius:80,borderBottomLeftRadius:80,justifyContent:"center"}}>
           <View  style={{paddingHorizontal:40}}>

           <Text  style={{fontSize:36,color:"#fff"}}>{Element.tem}</Text>
           <Text  style={{fontSize:28,color:"#fff"}}>{Element.city}</Text>
           </View>
        </View>
        ))}
            </View>
            <View  style={{marginTop:10,height:125,width:"100%",borderWidth:1,borderColor:"#E4E4EE",borderTopRightRadius:80,borderBottomLeftRadius:80,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
          <TouchableOpacity  style={{flex:1,flexDirection:"row",justifyContent:"center"}}>

           <View  style={{width:30,height:30,borderRadius:50,backgroundColor:"#F4F4F8",justifyContent:"center",alignItems:'center'}}>
                 <PLus />
           </View>
           <Text style={{paddingHorizontal:5}}>Add City</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
        </View>
      </View>
    </View>
  )
}

export default Setting