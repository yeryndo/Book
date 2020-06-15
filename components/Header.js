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

            <AntDesign name = "setting" size = {27} color = "black" />

            <Text style = {styles.mainHome}>{props.title}</Text>

            <FontAwesome5 name = "user" size = {24} color="black" />            
        </View>

        <View style = {styles.textArea}>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingTop: 8,
    },
    mainHome: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textArea: {
        paddingBottom: 10,
    },
    textBox: {
        alignSelf: 'center',
        borderColor: 'black', 
        borderWidth: 1,
        width: '75%',
        padding: 5,
        paddingTop: 2,
        paddingBottom: 2,
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
