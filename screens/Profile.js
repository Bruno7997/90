import React,{Component} from "react";
import {Text, View, StyleSheet, Platform, StatusBar, SafeAreaView, Image, Switch} from "react-native";
import {RFValue} from "react-native-responsive-fontsize"
import firebase from "firebase"
import * as Font from "expo-font"
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default class Profile extends Component
{
  constructor(props){
    super(props)
    this.state={
      isEnabled:false,
      light_theme:true,
      name:""
          }
  }
     
        componentDidMount(){
        this.fetchUser()
    }
     toggleSwitch(){
  
  const previous_state=this.state.isEnabled;
  const theme=!this.state.isEnabled?"dark":"light"
  var updates={}
updates["/users/"+firebase.auth().currentUser.uid+"/current_theme"]=theme;
firebase.database().ref().update(updates);
this.setState({
  isEnabled:!previous_state, 
  light_theme:previous_state
})
    }
    async fetchUser(){
      var theme, name, image;
      await firebase.database().ref("/users/"+firebase.auth().currentUser.uid)
      .on("value",function(snapshot){
        theme=snapshot.val().current_theme;
        name=`${snapshot.val().first_name} ${snapshot.val().last_name}`
      })
      this.setState({
        light_theme: theme=="light"?true:false,
        isEnabled: theme=="light"?false:true,
name:name,
      })
    }
render(){

        SplashScreen.hideAsync();
        return(
          <View style={this.state.light_theme?styles.containerLight:styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={this.state.light_theme?styles.appTitleTextLight:styles.appTitleText}>App Narração de Histórias</Text>
            </View>
          </View>
          <View>
          <View style={styles.profileImageContainer}>
          <Image source={require("../assets/profile_img.png")} style={styles.profileImage}></Image>
          <Text style={this.state.light_theme?styles.nameTextLight:styles.nameText}>{this.state.name}</Text>
          </View>
          <View style={styles.themeContainer}>
          <Text style={this.state.light_theme?styles.themeTextLight:styles.themeText}>Dark theme</Text>
          <Switch
          style={{transform:[{scaleX:1.3},{scaleY:1.3}]}}
          trackColor={{false:"white", true:this.state.light_theme?"red":"black"}}
          thumbColor={this.state.isEnabled?"black":"white"}
          ios_backgroundColor="black"
          onValueChange={()=>this.toggleSwitch()}
          value={this.state.isEnabled}
          />
          </View>
          <View style={{flex:0.3}}/>
          </View>
            <View style={{flex:0.08}}/>
        </View>
        )

    }

}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#15193c',
    height: '100%',
  },
  containerLight: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appIcon: {
    width: 50,
    height: 50,
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    marginLeft: 20,
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    border: '1px solid red',
  },
  appTitleTextLight: {
    color: 'black',
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    border: '1px solid red',
  },
  profileImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: RFValue(140),
    height: RFValue(140),
    borderRadius: RFValue(70),
  },
  nameText: {
    color: 'white',
    fontSize: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
    marginTop: RFValue(20),
  },
  nameTextLight: {
    color: 'black',
    fontSize: RFValue(40),
    fontFamily: 'Bubblegum-Sans',
    marginTop: RFValue(20),
  },
  themeContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: RFValue(20),
  },
  themeText: {
    color: 'white',
    fontSize: RFValue(30),
    fontFamily: 'Bubblegum-Sans',
    marginRight: RFValue(15),
  },
   themeTextLight: {
    color: 'black',
    fontSize: RFValue(30),
    fontFamily: 'Bubblegum-Sans',
    marginRight: RFValue(15),
  },
});
