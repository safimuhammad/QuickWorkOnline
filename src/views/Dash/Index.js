import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button, Text, SafeAreaView, } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/storage';
import { allUsersData , addProjectToDb} from '../../config/firebase'
import { useSelector } from 'react-redux'


export default function Dash({navigation}) {
  const [name, setName] = useState()
  const [description, setDescription] = useState("")
  const [allUsers, setAllUsers] = useState()
  const [currentUserDetails, setCurrentUserDetails] = useState()
  const [loading, setLoading] = useState(true)
  const [url, setUrl] = useState("")
  const user = useSelector(state => state.authReducer.user)
  console.log("user", user)
  
  
  useEffect(() => {
    allUsersData().then(res =>{
      console.log("data",res)
      setAllUsers(res)
      getUserDetails()
      
  }

      
      )
     
  }, [])


const getUserDetails = () => {
    const userDetails = []

    allUsers.forEach(doc => {
     

      if (user.email === doc.email) {
        userDetails.push({ doc, id: doc.id })
      }
      setCurrentUserDetails(userDetails)

    

    })
    console.log("userDetails", userDetails)





  }
  // console.log("check",currentUserDetails[0].doc.phoneNumber)


  async function Picker() {
    let result = await DocumentPicker.getDocumentAsync({ type: "*/*", copyToCacheDirectory: true }).then(response => {

      if (response.type == 'success') {

        let { name, size, uri } = response;
        let nameParts = name.split('.');
        let fileType = nameParts[nameParts.length - 1];
        var fileToUpload = {
          name: name,
          size: size,
          uri: uri,
          type: "application/" + fileType
        }
        setName(response.name)
        console.log("name", name)
        return uriToBlob(uri);


      }


    }).then((blob) => {
      return uploadToFirebase(blob);
    }).then((snapshot) => {
      firebase.storage().ref().child(`certificates/${name}`).getDownloadURL().then(url => {
        console.log('url**', url)
        setUrl(url)
      })

     

    }).catch((error) => {

      throw error;

      // });

    })

  }




  const uriToBlob = (uri) => {
    console.log("in urito blob")

    return new Promise((resolve, reject) => {

      const xhr = new XMLHttpRequest();

      xhr.onload = function () {
        // return the blob
        resolve(xhr.response);
      };

      xhr.onerror = function () {
        // something went wrong
        reject(new Error('uriToBlob failed'));
      };

      // this helps us get a blob
      xhr.responseType = 'blob';

      xhr.open('GET', uri, true);
      xhr.send(null);

    });

  }



  const uploadToFirebase = (blob) => {
    console.log("uploading")

    return new Promise((resolve, reject) => {

      var storageRef = firebase.storage().ref();

      storageRef.child(`certificates/${name}`).put(blob, {
        // contentType: 'jpeg'
      }).then((snapshot) => {



        resolve(snapshot);
        Alert.alert("File Uploaded")
        blob.close();

      }).catch((error) => {
        // console.log(error)

        reject(error);

      });

    });


  }
  const checker = () =>{
    if (description === ""){
      Alert.alert("fill description first")


    }else if (url === ""){
      Alert.alert("File not found")


    }else{
      uploadProject()

    }
  }


  const uploadProject = ()=>{
    addProjectToDb({description : description ,url:  url ,phone : currentUserDetails[0].doc.phoneNumber, name : currentUserDetails[0].doc.fullName, email : currentUserDetails[0].doc.email }).then(res=>{
      Alert.alert("Project Uploaded , We'll get back to you soon")
      navigation.navigate('Home')
    })

  }
  console.log("num",currentUserDetails)



  return (
    <View style={styles.container}>
     
      
      <View style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'pink', width: '100%', height: '20%', color: 'white' }}>

  
          <Text style={{
            paddingTop: 100, fontSize: 40, color: '#FF1493',
            fontStyle: 'italic',
            textShadowColor: '#FFFAFA',
            textShadowOffset: { width: 10, height: 10 },
            textShadowRadius: 15,

          }} >QuickWorkOnline</Text>
        
      </View>
     
     <TouchableOpacity style={styles.buttonStyle} onPress={()=> navigation.navigate('Home')}>
       <Text style={{color:'white'}}>Home</Text>
     </TouchableOpacity>
  
      <Text style={{ fontSize: 42, color: '#FF1493', paddingTop: 60, fontStyle: 'italic' }}>Upload Project </Text>
      <TextInput style={styles.commentBox} placeholder="          add description" onChangeText={(text) => setDescription(text)} />
      <TouchableOpacity style={styles.buttonStyle} onPress={() => Picker()} >
        <Text style={{ color: 'white' }}>Upload File</Text>
      </TouchableOpacity>
     

      <TouchableOpacity style={styles.buttonStyle} onPress={() => checker()} >
        <Text style={{ color: 'white' }}>Post Project</Text>
      </TouchableOpacity>
     
     
       

    </View>
  );
};

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'pink',
    width:'100%'

  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#FF1493",
    padding: 10,
    borderRadius: 10,
    marginTop: 16,
    width:200
  },

  input: {
    height: 35,
    margin: 10,
    borderWidth: 1,
    width: 100,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  commentBox: {
    height: 80,
    margin: 80,
    borderWidth: 1,
    width: '80%',
    borderRadius: 15,
    backgroundColor: 'white'
  },
  buttonTextStyle: {
    color: "white",
    fontWeight: "bold",
  },
  footerHeading: {
    fontSize: 18,
    textAlign: "center",
    color: "grey",
  },
  footerText: {
    fontSize: 16,
    textAlign: "center",
    color: "grey",
  },
  

})
