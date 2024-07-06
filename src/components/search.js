
import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchBar = ({ placeholders }) => {
  const [searchText, setSearchText] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [placeholders]);

  const handleSearch = (text) => {
    setSearchText(text);
   
    setSuggestions(
      ['suggestion1', 'suggestion2', 'suggestion3'].filter((suggestion) =>
        suggestion.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholders[placeholderIndex]}
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={suggestions}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.suggestion}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  suggestion: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SearchBar;
