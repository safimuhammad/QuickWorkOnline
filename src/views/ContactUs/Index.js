import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button, Text, SafeAreaView } from 'react-native';



export default function ContactUs({ navigation }) {





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
            <Text style={{
                fontSize: 30, paddingTop: 10,
                fontStyle: 'italic',
                textShadowColor: 'pink',
                textShadowOffset: { width: 10, height: 10 },
                textShadowRadius: 15,
            }}>Contact Us</Text>


           
            <Text style={{
                fontSize: 20, paddingTop: 50, color: '#FF1493',
                fontStyle: 'italic',
            }}>  email address: info@quickworkonline.com {'\n'} </Text>
            <Text style={{
                fontSize: 20, paddingTop: 2, color: '#FF1493',
                fontStyle: 'italic',
            }}>  Whatsapp :  +923343098426 {'\n'} </Text>
            <Text style={{
                fontSize: 18, paddingTop: 2, color: '#FF1493',
                fontStyle: 'italic',
            }}> Address:  Melton St S Auburn NSW 2144 ,{'\n'}Australia  </Text>
          
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

})