import { View, Text } from 'react-native'
import React from 'react'
import SearchBar from '../components/search'

const Setting = () => {
    return (
        <View style={{ flex: 1 }}>
            <SearchBar placeholders={['Search Settings...', 'What do you need?', 'Type here...']} />
            <Text>Setting</Text>
        </View>
    )
}

export default Setting