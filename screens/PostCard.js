import React,{Component} from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen";
import Ionicons from "react-native-vector-icons/Ionicons"
import { RFValue } from "react-native-responsive-fontsize";

SplashScreen.preventAutoHideAsync();

export default class Feed extends Component
{
    constructor(props){
        super(props);
        this.state={

        }
    }
    
   
render(){
    SplashScreen.hideAsync();
return (
    <View style={styles.container}>
<View style={styles.cardContainer}>
  <View style={styles.authorContainer}>
  <View style={styles.authorImageContainer}>
<Image source={require("../assets/profile_img.png")} style={styles.profileImage}/>
</View>
<View style={styles.authorNameContainer}>
<Text style={styles.authorNameText}>{this.props.post.author}</Text>
</View>
</View>
<Image source={require("../assets/profile_img.png")} style={styles.postImage}/>
<View style={styles.captionContainer}>
<Text style={styles.captionText}>{this.props.post.caption}</Text>
</View>
<View style={styles.actionContainer}>
    <View style={styles.likeButton}>
        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
        <Text style={styles.likeText}>12k</Text>
    </View>
</View>
</View>
    </View>
)


    

}

}
const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: "#2f345d",
      borderRadius: RFValue(20)
    },
    storyImage: {
      resizeMode: "contain",
      width: "95%",
      alignSelf: "center",
      height: RFValue(250)
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: "center"
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      fontFamily: "Bubblegum-Sans",
      color: "white"
    },
    descriptionText: {
      fontFamily: "Bubblegum-Sans",
      fontSize: 13,
      color: "white",
      paddingTop: RFValue(10)
    },
    actionContainer: {
      justifyContent: "center",
      alignItems: "center",
      padding: RFValue(10)
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: "#eb3948",
      borderRadius: RFValue(30)
    },
    likeText: {
      color: "white",
      fontFamily: "Bubblegum-Sans",
      fontSize: RFValue(25),
      marginLeft: RFValue(5)
    }
  });
