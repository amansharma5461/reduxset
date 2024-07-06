

import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootNavigator } from '@common';
import FourTask from './fourTask';



const ThreeTask = () => {
 const [isModalVisible, setIsModalVisible] = useState(false);
 const [likes, setLikes] = useState(0);
 const [views, setViews] = useState(0);


 useEffect(() => {
   const loadData = async () => {
     try {
       const savedLikes = await AsyncStorage.getItem('likes');
       const savedViews = await AsyncStorage.getItem('views');
       if (savedLikes !== null) {
         setLikes(parseInt(savedLikes, 10));
       }
       if (savedViews !== null) {
         setViews(parseInt(savedViews, 10));
       }
     } catch (error) {
       console.log('Error loading data: ', error);
     }
   };


   loadData();


   let interval;
   interval = setInterval(() => {
     setLikes(prevLikes => prevLikes + 1);
     setViews(prevViews => prevViews + 1);
     AsyncStorage.setItem('likes', (likes + 1).toString());
     AsyncStorage.setItem('views', (views + 1).toString());
   }, 30000);


   return () => clearInterval(interval); 
 }, []); 


 const handleFreeTrial = () => {
   setIsModalVisible(true);
 };


 const handleSubscribe = () => {
   setIsModalVisible(false);
   
 };


 return (
   <View style={styles.container}>
     <View style={styles.buttonContain}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleFreeTrial}
        >
          <Text style={styles.buttonText}>Like & Views</Text>
        </TouchableOpacity>
      </View>


     <Modal
       isVisible={isModalVisible}
       animationIn="slideInUp"
       animationOut="slideOutDown"
       onBackdropPress={() => setIsModalVisible(false)}
       style={styles.bottomModal}
     >
       <View style={styles.modalContent}>
         <View style={styles.statsContainer}>
           <Text style={styles.statText}>Likes: {likes}</Text>
           <Text style={styles.statText}>Views: {views}</Text>
         </View>
         <View style={styles.buttonContainer}>
           <Button title="Close" onPress={handleSubscribe} />
         </View>
       </View>
     </Modal>
     <View style={styles.buttonContain}>
     <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => RootNavigator.navigate(FourTask)}
        >
          <Text style={styles.buttonText}>Task 4</Text>
        </TouchableOpacity>
        </View>
   </View>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
 },
 bottomModal: {
   justifyContent: 'flex-end',
   margin: 0,
 },
 modalContent: {
   height: '50%',
   backgroundColor: 'white',
   padding: 20,
   borderTopLeftRadius: 20,
   borderTopRightRadius: 20,
   justifyContent: 'space-between',
 },
 modalText: {
   fontSize: 18,
   textAlign: 'center',
 },
 statsContainer: {
   alignItems: 'center',
   flexDirection:'row',
   justifyContent:'space-around'
 },
 statText: {
   fontSize: 16,
   marginVertical: 5,
 },
 buttonContainer: {
   justifyContent: 'flex-end',
 },
 buttonContain: {
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical:30
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});


export default ThreeTask;


