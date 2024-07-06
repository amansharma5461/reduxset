import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import { RootNavigator } from '@common';
import SecondTask from './secondTask';



function FirstTask(props) {
  const [isModalVisible, setModalVisible] = useState(false);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const images = [
    {
      url: 'https://images.unsplash.com/photo-1605701250441-2bfa95839417?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];


  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={toggleModal}
        >
          <Text style={styles.buttonText}>Open Image Viewer</Text>
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.bottomModal}
      >
        <View style={styles.modalContent}>
          <ImageViewer
            imageUrls={images}
            enableSwipeDown={true}
            onSwipeDown={toggleModal}
            renderIndicator={() => null} // Remove default indicator
            useNativeDriver={true}
          />
          <Button title="Close" onPress={toggleModal} />
        </View>
      </Modal>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => RootNavigator.navigate(SecondTask)}
        >
          <Text style={styles.buttonText}>Task 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


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
    height: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

});


export default FirstTask;
