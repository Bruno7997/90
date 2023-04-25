import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";
import firebase from "firebase"
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();



const appIcon = require("../assets/logo.png");

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      last_name:"",
      first_name:"",
      confirmPassword:"",
      email: "",
      password: "",
    };
  }
  

registerUser=(email,password,confirmPassword,first_name,last_name)=>{
if(confirmPassword==password){
  firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
.then((userCredential)=>{
  Alert.alert("Usuario registrado");
})
.catch(error=>{Alert.alert(error.message)})
}
else{
  Alert.alert("As senhas não são iguais")
}
}

  render() {
 
      SplashScreen.hideAsync();
      const { confirmPassword, last_name, first_name, email, password} = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Registrar</Text>

          <TextInput style={styles.textinput}
            onChangeText={text => this.setState({ first_name: text })}
            placeholder={"Digite seu nome"}
            placeholderTextColor={"#FFFFFF"}
            />
             <TextInput style={styles.textinput}
            onChangeText={text => this.setState({ last_name: text })}
            placeholder={"Digite seu sobrenome"}
            placeholderTextColor={"#FFFFFF"}
            />


          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Digite o e-mail"}
            placeholderTextColor={"#FFFFFF"}

          />
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Digite a senha"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />

           <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ confirmPassword: text })}
            placeholder={"Confirme sua senha"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />


          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
onPress={()=>{this.registerUser(email,password,confirmPassword,first_name,last_name)}}
          >
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate("Login")}}
          >
            <Text style={styles.buttonTextNewUser}>Login</Text>
          </TouchableOpacity>
          
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems: "center",
    justifyContent: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginBottom: RFValue(20)
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(40),
    padding: RFValue(10),
    marginTop: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
    fontFamily: "Bubblegum-Sans"
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#15193c",
    fontFamily: "Bubblegum-Sans"
  },
  buttonTextNewUser: {
    fontSize: RFValue(12),
    color: "#FFFFFF",
    fontFamily: "Bubblegum-Sans",
    textDecorationLine: 'underline'
  }
});