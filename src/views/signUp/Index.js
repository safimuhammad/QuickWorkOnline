import React,{useState, useEffect} from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button,Text } from 'react-native';
import {  register , addUserToDb } from '../../config/firebase'


export default function SignUp({navigation}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
   const [fullName, setFullName] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [role, setRole] = useState()

   
    
    
    function onSignUp() {
      
      register(email, password).then(res => {
        addUserToDb({ email, password, fullName, phoneNumber}).then(res => {
          clearValue()
          Alert.alert('You have Successfully Signed up')

          navigation.navigate('Login')
  
  
        }).catch(e => { alert(e.message) })
  
  
  
  
      }).catch(e => { alert(e.message) })
  
    }
  
    function passChecker() {
      if (password === confirmPassword) {
        onSignUp()
  
  
  
      } else {
        Alert.alert("Pasword not matched", "failed")
      }
    }

    const infoChecker = () => {
      if (email === undefined) {
        Alert.alert("Your email field is empty")
  
      }
      else if (fullName === undefined) {
        Alert.alert("Your fullName field is empty")
  
      }
      else if (phoneNumber === undefined) {
        Alert.alert("please upload your phoneNumber")
  
     
  
      }
      else {
        passChecker()
  
  
      }
  
  
    }
    function clearValue(){
      setEmail("")
      setConfirmPassword("")
      setPassword("")
      setPhoneNumber("")
    }
  

   
    return (
        <View style={styles.container}>
          <Image  style={{height:250,width:250}}source={require('../../../assets/sign.jpg')}/>
            <TextInput style={styles.input}  value= {email} placeholder="  Email" onChangeText={(text)=> setEmail(text)}/>
          
            <TextInput style={styles.input}  value= {fullName} placeholder="  Full Name" onChangeText={(text)=> setFullName(text)}/>
            <TextInput style={styles.input}  value= {password} placeholder="  password" secureTextEntry={true}  onChangeText={(text)=> setPassword(text)}/>
            <TextInput style={styles.input}  value= {confirmPassword} placeholder="  confirm password" secureTextEntry={true}  onChangeText={(text)=> setConfirmPassword(text)}/>
            <TextInput style={styles.input}  value= {phoneNumber} placeholder="  Phone Number" onChangeText={(text)=> setPhoneNumber(text)}/>
          
            <Button onPress={()=> infoChecker()} title="Sign Up"/>
            
            
            
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text  >Have an account ? Log In here</Text>
            </TouchableOpacity>

            
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    height: 35,
    margin: 8,
    borderWidth: 1,
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'white'
  }
});
