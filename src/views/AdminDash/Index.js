import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button, Text, SafeAreaView, } from 'react-native';
import { getProject } from '../../config/firebase'


import * as Linking from 'expo-linking';



export default function AdminDash() {
    const [pin, setPin] = useState()
    const [auth, setAuth] = useState(false)
    const [project, setProject] = useState()

    useEffect(() => {
        getProject().then(res => {

            setProject(res)


        })

    }, [])
    console.log("state", project)



    const pinChecker = () => {
        if (pin === "admin123") {
            setAuth(true)
        } else {
            setPin("")
            Alert.alert("invalid PIN")

        }

    }

    return (
        <View style={styles.container}>
            {auth ?


                <View style={styles.container}>


                    <View style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'pink', width: '100%', height: '20%', color: 'white', position: 'absolute' }}>


                        <Text style={{
                            paddingTop: 100, fontSize: 40, color: '#FF1493',
                            fontStyle: 'italic',
                            textShadowColor: '#FFFAFA',
                            textShadowOffset: { width: 10, height: 10 },
                            textShadowRadius: 15,

                        }} >QuickWorkOnline</Text>
                    </View>


                    <Text style={{paddingTop:150}}>{project.map(item => {

                        return <>
                            <Text>___________________________________________________________</Text>
                            <Text style={{ fontSize: 18, color: '#FF1493',fontStyle: 'italic', }}>{'\n'}Project Description: {item.description}{'\n'}</Text>
                            <Text style={{ fontSize: 18, color: '#FF1493',fontStyle: 'italic' }}>Client Name: {item.name}{'\n'}</Text>
                            <Text style={{ fontSize: 18 , color: '#FF1493',fontStyle: 'italic'}}>Client Phone: {item.phone}{'\n'}</Text>
                            <Text style={{ fontSize: 18, color: '#FF1493',fontStyle: 'italic' }}>Client email: {item.email}{'\n'}</Text>

                            <Text style={{ fontSize: 16, color: '#FF1493',fontStyle: 'italic' }}>{'\n'}Project File: {item.url}{'\n'}</Text>
                            <Button title="open file" onPress={() =>  Linking.openURL(item.url)} />



                            
                  


                            <Text>___________________________________________________________</Text>


                        </>

                    })}

                    </Text>




                   





                   






                </View>

                : <View style={styles.container2}>
                    <Text style={{ fontSize: 18 }}> Enter PIN To Access Admin Panel</Text>
                    <TextInput style={styles.input} value={pin} placeholder="      enter PIN" secureTextEntry={true} onChangeText={(text) => setPin(text)} />
                    <Button title="GO" onPress={() => pinChecker()} />







                </View>}


        </View>
    );
};







const styles = StyleSheet.create({
    main:{
  
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        
    },


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
        backgroundColor: 'pink',
        width: '100%'

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
