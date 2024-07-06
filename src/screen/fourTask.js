import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { RootNavigator } from '@common';
import Home from './home';



const { width } = Dimensions.get('window');
const IMAGES = [
    { id: '1', src: require('@images/reduce/nw1.png') },
    { id: '2', src: require('@images/reduce/nw2.png') },
    { id: '3', src: require('@images/reduce/nw3.png') },
    { id: '4', src: require('@images/reduce/nw4.png') },
    { id: '5', src: require('@images/reduce/nw5.png') },
    { id: '6', src: require('@images/reduce/nw6.png') },
    { id: '7', src: require('@images/reduce/task.png') },
];


const FourTask = () => {
 const scrollX = useRef(new Animated.Value(0)).current;
 const flatListRef = useRef(null);
 const currentIndex = useRef(0);


 const handleGesture = Animated.event(
   [{ nativeEvent: { translationX: scrollX } }],
   { useNativeDriver: true }
 );


 const handleGestureEnd = (e) => {
   const { translationX } = e.nativeEvent;


   if (translationX < -50) {
     // Swipe left
     currentIndex.current = Math.min(currentIndex.current + 1, IMAGES.length - 1);
   } else if (translationX > 50) {
     // Swipe right
     currentIndex.current = Math.max(currentIndex.current - 1, 0);
   }


   flatListRef.current.scrollToIndex({ index: currentIndex.current, animated: true });
 };


 const renderItem = ({ item }) => {
   return (
     <View style={styles.imageContainer}>
       <Image source={item.src} style={styles.image} />
     </View>
   );
 };


 return (
   <View style={styles.container}>
     <PanGestureHandler
       onGestureEvent={handleGesture}
       onHandlerStateChange={handleGestureEnd}
     >
       <Animated.View style={StyleSheet.absoluteFillObject}>
         <FlatList
           ref={flatListRef}
           data={IMAGES}
           keyExtractor={(item) => item.id}
           horizontal
           pagingEnabled
           showsHorizontalScrollIndicator={false}
           scrollEnabled={false}
           renderItem={renderItem}
           getItemLayout={(data, index) => ({
             length: width,
             offset: width * index,
             index
           })}
         />
       </Animated.View>
     </PanGestureHandler>
     <View style={styles.buttonContain}>
     <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => RootNavigator.navigate(Home)}
        >
          <Text style={styles.buttonText}>Task 5</Text>
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
 imageContainer: {
   width,
   justifyContent: 'center',
   alignItems: 'center',
 },
 image: {
   width: width * 0.8,
   height: width * 0.5,
   resizeMode: 'cover',
   borderRadius: 10,
 },
 buttonContain: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 200,
    borderRadius: 25,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});


export default FourTask;