import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Alert, TextInput, ImageBackground, TouchableOpacity, ScrollView, Image, Button, Text, SafeAreaView } from 'react-native';
import { Card, ListItem, Icon } from 'react-native-elements'
import { logout } from '../../config/firebase'


export default function Home({ navigation }) {




    function logOut (){
        logout()
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'pink', width: '100%', height: '20%', color: 'white' }}>


                <Text style={{
                    paddingTop: 100, fontSize: 40, color: '#FF1493',
                    fontStyle: 'italic',
                    textShadowColor: '#FFFAFA',
                    textShadowOffset: { width: 10, height: 10 },
                    textShadowRadius: 15,

                }} >QuickWorkOnline</Text>

            </View>
            <Text style={{fontSize:28 , color: '#FF1493',fontStyle:'italic'}}>Our Services</Text>

            <TouchableOpacity style={{borderRadius:15,backgroundColor:'#FF1493',height:28}} onPress={()=> navigation.navigate('Dash')}> 
                <Text style={{color:'white',paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5,fontSize:15}}>
                    Post your project here
                </Text>
                
            </TouchableOpacity  >
            <TouchableOpacity style={{borderRadius:15,backgroundColor:'#FF1493',height:28,margin:5}} onPress={()=> navigation.navigate('AdminDash')}> 
                <Text style={{color:'white',paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5,fontSize:15}}>
                   Admin Dash
                </Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:15,backgroundColor:'#FF1493',height:28,margin:5}} onPress={()=> logOut()}> 
                <Text style={{color:'white',paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5,fontSize:15}}>
                 Log Out
                </Text>
                
            </TouchableOpacity>
            
         
            <ScrollView >
                <Card>
                    <Card.Title style={{fontSize:22 ,  color: '#FF1493'}}>SEO</Card.Title>
                    <Card.Divider />
                    <Card.Image source={require('../../../assets/seo.png')}>

                       
                    </Card.Image>
                     <Text style={{ marginTop: 15 , color: '#FF1493',fontSize:18 , fontStyle:'italic'}}>
                           Attract the traffic that matters with our SEO services,
                           which include local, eCommerce, and national SEO
                     </Text>
                </Card>


                <Card>
                    <Card.Title style={{fontSize:22 , color: '#FF1493'}}>Content Writing</Card.Title>
                    <Card.Divider />
                    <Card.Image  source={require('../../../assets/content.jpg')}>
                     
                    </Card.Image>
                    <Text style={{ marginTop: 15 , color: '#FF1493',fontSize:18 , fontStyle:'italic' }}>
                           After all, we add an extra bit of oomph to the words, making your brand's content digestable, eye-catching ,
                           and hard to resist
                     </Text>
                </Card>

                <Card>
                    <Card.Title style={{fontSize:22, color: '#FF1493'}}>Digital Marketing</Card.Title>
                    <Card.Divider />
                    <Card.Image  source={require('../../../assets/digital.jpg')}>
                       
                    </Card.Image>
                    <Text style={{  marginTop: 15 , color: '#FF1493',fontSize:18 , fontStyle:'italic'}}>
                           Build brand awareness on the top social media networks with a custom marketing,
                           with a custom marketing and advertising strategy.
                     </Text>
                </Card>

                <Card>
                    <Card.Title  style={{fontSize:22, color: '#FF1493'}}>Video and Animation</Card.Title>
                    <Card.Divider />
                    <Card.Image  source={require('../../../assets/video.jpg')}>
                      
                    </Card.Image>
                    <Text style={{   marginTop: 15 , color: '#FF1493',fontSize:18 , fontStyle:'italic'}}>
                          Enhance Your Animations With Avatar Based Videos.
                     </Text>
                </Card>

                <Card>
                    <Card.Title style={{fontSize:22 , color: '#FF1493'}}>Programmers and Developers</Card.Title>
                    <Card.Divider />
                    <Card.Image  source={require('../../../assets/program.jpg')}>
                       
                    </Card.Image>
                    <Text style={{ marginTop: 15,  color: '#FF1493',fontSize:18 , fontStyle:'italic' }}>
                            Learning to code has grown over the years from just a hobby to a career.
                     </Text>
                </Card>
                <TouchableOpacity style={{borderRadius:15,backgroundColor:'#FF1493',height:28,margin:5}} onPress={()=> navigation.navigate('ContactUs')}> 
                <Text style={{color:'white',paddingLeft:5,paddingRight:5,paddingTop:5,paddingBottom:5,fontSize:15}}>
                  Contact Us
                </Text>
                
            </TouchableOpacity>




            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

})
