import React, { Component, useState, useEffect } from 'react';
import { View, Text,Image ,PermissionsAndroid} from 'react-native';
import MapView,{ Polyline }  from  'react-native-maps'
import Geolocation from '@react-native-community/geolocation';
import LazyfoxMapDirection from "lazyfox-map-direction";
const HomeScreen=(props)=> {
    
      const [location,setLocation] =useState({
        latitude: 37.78825,
        longitude: -122.4324,
      });
      const [stores,setStores]=useState([
          {
            
                latitude: 25.447484,
                longitude: 78.573205,
                title:"Store 1"
                  
          },
          {
            latitude: 25.444074,
            longitude: 78.576791,
            title:"Store 2"
          },
          {
            latitude: 25.462551,
            longitude: 78.546724,
            title:"Store 3"
          },
          {
            latitude: 25.457824,
            longitude: 78.550933,
            title:"Store 4"
          },
          {
            latitude: 25.466115,
            longitude:78.551920,
            title:"Store 5"
          },
          {
            latitude:25.468750,
            longitude: 78.544706,
            title:"Store 6"
          },


      ])
      const [store,setStore]=useState(stores[4]);
      const [granted,setGranted]=useState(false)

      useEffect(()=>
      {

        setTimeout(async()=>{

            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                {
                    title: 'Location Permission',
                    message:'Get your location to post request',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },  
            );
            
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                
               Geolocation.watchPosition            (position => {
                    setLocation({longitude:position.coords.longitude,
                    latitude:position.coords.latitude,
                
                    })
                  
                });
                setGranted(true);
            }
            


        },500)
        
    
      },[])

     const handleClick=(e)=>
      {
     

       setLocation({latitude:e.nativeEvent.coordinate.latitude,longitude:e.nativeEvent.coordinate.longitude})
       
      }
      const storeSelect=(i)=>{
        setStore(stores[i]);
      }
     const getRegion=()=>({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05

     })

     var _mapView;
     console.log(store);
     return ( 
         
      
     <MapView
      style={{ flex: 1 }}
        showUserLocation
      followUserLocation
      zoomControlEnabled
      ref = {(mapView) => { _mapView = mapView; }}
      loadingEnabled
      region={getRegion()}
      //onPress={(e)=>handleClick(e)}
    >
    {stores.map((store,i)=>(<MapView.Marker
    key={i}
    onPress={() => storeSelect(i)}
    coordinate={{ "latitude": store.latitude,   
    "longitude":store.longitude}}
    title={store.title}
    >
       <Image
       
        style={{width:40,height:40}}
               source={require('../../images/shops.png')}
            
                />
                </MapView.Marker>
      
      ))}

  <MapView.Marker
    coordinate={{ "latitude": location.latitude,   
    "longitude": location.longitude }}
    title={"Your Location"}
    draggable={true} >

              <Image
               source={require('../../images/user.png')}
            
                />
      </MapView.Marker>



  

      <LazyfoxMapDirection 
            apiKey={"AIzaSyBfi7Rll0G2XWr2t7_B9oJGakdArhKZLEI"} // google maps api 
            wayPoint = {stores}  // array
            wayPointLimit = {10} // optional
           
          />


        </MapView>
               
         );



    
}
 
export default HomeScreen;