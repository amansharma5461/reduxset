

import React, { useState } from 'react';
import { View, Text, Button, Modal as RNModal, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { RootNavigator } from '@common';
import ThreeTask from './threeTask';



const SecondTask = () => {
 const [isLoading, setIsLoading] = useState(false);
 const [isModalVisible, setIsModalVisible] = useState(false);


 const handleFreeTrial = () => {
   setIsLoading(true);
   setTimeout(() => {
     setIsLoading(false);
     setIsModalVisible(true);
   }, 2000); 
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
          <Text style={styles.buttonText}>Accept Free Trial</Text>
        </TouchableOpacity>
      </View>


     {isLoading && <ActivityIndicator size="large" color="#000000" />}


     <Modal
       isVisible={isModalVisible}
       animationIn="slideInUp"
       animationOut="slideOutDown"
       onBackdropPress={() => setIsModalVisible(false)}
       style={styles.bottomModal}
     >
       <View style={styles.modalContent}>
         <Text>Subscribe to continue</Text>
         <View style={styles.buttonContainer}>
           <Button title="Subscribe" onPress={handleSubscribe} />
         </View>
       </View>
     </Modal>
     <View style={styles.buttonContain}>
     <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => RootNavigator.navigate(ThreeTask)}
        >
          <Text style={styles.buttonText}>Task 3</Text>
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
   justifyContent:'space-between'
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


export default SecondTask;


