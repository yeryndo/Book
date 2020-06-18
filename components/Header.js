import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';

const Header = (props) => {
  const [enteredBook, setEnteredBook] = useState('');

  const bookInputHandler = (enteredText) => {
    setEnteredBook(enteredText);
  }


  return (
      <View>
        <View style = {styles.header}>
            
            <TouchableOpacity style={styles.settingButtonStyle} activeOpacity={0.5}>
                <Image
                    source={require('../assets/setting.png')}
                    style = {styles.setting}
                />
            </TouchableOpacity>

            <Text style = {styles.mainHome}>{props.title}</Text>
 
            <TouchableOpacity style={styles.settingButtonStyle} activeOpacity={0.5}>
                <Image
                    source={require('../assets/profile.jpg')}
                    style = {styles.profile}
                />
            </TouchableOpacity>         
        </View>

        <View style = {styles.searchSection}>
            <TextInput style = {styles.textBox}
                placeholder="Search for a book" 
                placeholderTextColor = 'gray'
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
        paddingTop: 6,
    },
    mainHome: {
        textAlign: 'center',
        fontSize: 20,
        paddingBottom: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        height: 40,      
    },
    textBox: {
        alignSelf: 'center',
        borderColor: 'black', 
        borderWidth: 1,
        padding: 5,
        paddingTop: 2,
        paddingBottom: 2,
        height: 40,
        width: '80%',
        backgroundColor: 'gainsboro',
    },
    setting: {
        height: 25,
        width: 25
    },
    profile: {
        height: 25,
        width: 25
    }

})

export default Header;
