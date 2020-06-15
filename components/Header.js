import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const Header = (props) => {
  const [enteredBook, setEnteredBook] = useState('');

  const bookInputHandler = (enteredText) => {
    setEnteredBook(enteredText);
  }


  return (
      <View>
        <View style = {styles.header}>
            
            {/* <TouchableOpacity style={styles.settingButtonStyle} activeOpacity={0.5}>
                <Image
                    source={require('../assets/settings.png')}
                />
            </TouchableOpacity> */}

            <AntDesign name = "setting" size = {24} color = "black" />

            <Text style = {styles.mainHome}>{props.title}</Text>

            <FontAwesome5 name = "user" size = {24} color="black" />            
        </View>

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
        paddingTop: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
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
    },
    settingButtonStyle: {
        backgroundColor: 'white',
        padding: 1,
        height: 25,
        width: 25,
        aspectRatio: 2
    }
})

export default Header;
