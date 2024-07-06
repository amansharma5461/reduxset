import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../components/search'
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBar placeholders={['Search Home...', 'Looking for something?', 'Type here...']} />
            <Text>home</Text>
        </View>
    )
}

export default Home