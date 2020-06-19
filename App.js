import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";

import profilePic from "../rn-book-app/assets/profilePic.png";
import book from "../rn-book-app/assets/book1.png";

const deviceWidth = Dimensions.get("window").width;
const imageWidth = deviceWidth / 3 + 30;
//Data
const books = [
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "1",
    description: "It's an okay book I guess",
    image: book,
  },
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "2",
    description: "It's an okay book I guess",
    image: book,
  },
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "3",
    description: "It's an okay book I guess",
    image: book,
  },
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "4",
    description: "It's an okay book I guess",
    image: book,
  },
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "5",
    description: "It's an okay book I guess",
    image: book,
  },
  {
    name: "Object Oriented Programming Java 4th Edition",
    key: "6",
    description: "It's an okay book I guess",
    image: book,
  },
];
export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.userProfile}>
        <View style={styles.userDetail}>
          <View style={styles.profilePic}>
            <Image
              source={profilePic}
              style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
            />
          </View>
          <View style={styles.userDescription}>
            <Text style={styles.name}>Mike Wazowski</Text>
            <Text style={styles.school}>Villanova University</Text>
            <Text style={styles.school}>Computer Science</Text>
            <Text style={styles.starRating}> Star Rating *</Text>
          </View>
        </View>
        <View style={styles.unwantedBooks}>
          <FlatList
            data={books}
            renderItem={({ item }) => (
              <View style={{ flex: 1, flexDireciton: "column" }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: "#E4EDF5",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 100, height: 100, margin: 5 }}
                  />
                  <View style={{ flex: 1, flexDirection: "column" }}>
                    <Text style={styles.bookList}>Title: {item.name}</Text>
                    <Text style={styles.bookList}>
                      Description: {item.description}
                    </Text>
                  </View>
                </View>
                <View style={{ height: 3, backgroundColor: "#A2CCF3" }}></View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userProfile: {
    flex: 1,
  },
  userDetail: {
    flex: 0.3,
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    marginLeft: 5,
  },
  userDescription: {
    marginTop: 10,
    marginLeft: 0,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  school: {
    textAlign: "center",
  },
  starRating: {
    marginTop: 90,
    textAlign: "center",
  },

  unwantedBooks: {
    flex: 0.7,
  },
  bookList: {
    fontSize: 15,
    padding: 10,
  },
  bookImage: {
    width: imageWidth,
    height: deviceWidth / 2,
  },
});
