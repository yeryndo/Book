import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Header = (props) => {
  const [enteredBook, setEnteredBook] = useState('');

  const bookInputHandler = (enteredText) => {
    setEnteredBook(enteredText);
  }

  return (
        <View style = {styles.header}>
            <Text style = {styles.mainHome}>{props.title}</Text>
            <View>
                <TextInput style = {styles.textBox}
                    placeholder="Search for a book" 
                    onChangeText = {bookInputHandler} 
                    value = {enteredBook}
                />
            </View>
        </View>
  );
};


Header.defaultProps = {
    title: 'Home',
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 15
    },
    mainHome: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        borderColor: 'black', 
        borderWidth: 1,
        width: '80%',
        padding: 5,
        paddingTop: 0,
        paddingBottom: 0,
    }
})

export default Header;
