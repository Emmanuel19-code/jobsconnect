import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import homestyles from '../styles/home'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={homestyles.container}>
      <View style={homestyles.imageContainer}>
        <Image source={require("../assets/Image1.png")} />
      </View>
      <View style={homestyles.secondContainer}>
        <Text style={homestyles.secondContainerHeading}>
          Your Dream Job is Waiting For You
        </Text>
        <Text style={homestyles.secondContainerSubHeading}>
          Find interesting Vacancies from trusted Companies
        </Text>
        <View style={homestyles.thirdContainter}>
          <Pressable style={homestyles.buttonOne}>
            <Text style={homestyles.buttonText}>Sign Up</Text>
          </Pressable>
          <Pressable
            style={[
              homestyles.buttonOne,
              {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#e2e8f0",
              },
            ]}
            onPress ={()=>navigation.navigate("login")}
          >
            <Text style={[homestyles.buttonText, { color: "grey" }]}>
              log In
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home