import React,{useState, useEffect} from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button ,Text} from 'react-native';
import { login } from '../../config/firebase'
import { addUser } from '../../store/actions/authAction'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export default function Login({navigation}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    console.log("user",user)
    
  useEffect(() => {
    dispatch(addUser())

  }, [])
    
  
    function OnLogIn(){
      login(email,password).then(res=>{
          Alert.alert("You have successfully logged in success")
          navigation.navigate('Home')
      }).catch(e=>{alert(e.message)})
  }

    
    return (
        <View style={styles.container}>
          <Text style={{fontSize:25,fontStyle:'italic'}}>LOG IN</Text>
           <Image  style={{height:250,width:250}}source={require('../../../assets/sign.jpg')}/>
            <TextInput style={styles.input} placeholder="  Email" onChangeText={(text)=> setEmail(text)}/>
            <TextInput style={styles.input} secureTextEntry={true}  placeholder="  password" onChangeText={(text)=> setPassword(text)}/>
            <Button onPress={()=> OnLogIn()} title="Login"/>
            <Text>{"\n"}</Text>


            <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
              <Text  >Dont have an account ? Sign Up here</Text>
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
