import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import confirmStyles from "../styles/confirm";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import ViewJovReview from "../components/viewjobReview";
import AboutCompany from "../components/AboutCompany";
const ViewJob = ({navigation}) => {
  const [type, setType] = useState("description");
  return (
    <SafeAreaView style={[confirmStyles.container]}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Pressable onPress={()=>navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "rgba(106, 57, 147, 1)",
              marginRight: 8,
              fontWeight: 400,
            }}
          >
            Emmanuel
          </Text>
          <Image source={require("../assets/profile.png")} />
        </View>
      </View>

      <View
        style={{
          marginTop: 15,
          height: 181,
          width: 321,
          borderRadius: 11,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "#fcc636",
            padding: 10,
            shadowColor: "blue",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
            flex: 1,
          }}
        >
          <View style={{ 
             flexDirection:'row',
           }}>
            <View style={{ 
               width:48,
               height:48,
               backgroundColor:"black",
               justifyContent:'center',
               alignItems:'center',
               borderRadius:8,
               marginRight:5
             }}>
              <Image source={require('../assets/spotifylogo.png')}/>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                Graphic Designer
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 400,
                }}
              >
                Spotify
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 5, // Added spacing for better layout
            }}
          >
            <View
              style={{
                margin: 5,
                width: 89,
                heith: 28,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 6,
                borderRadius: 24,
              }}
            >
              <EvilIcons name="location" size={20} color="black" />
              <Text
                style={{
                  fontWeight: 500,
                  marginLeft: 4,
                }}
              >
                Remote
              </Text>
            </View>
            <View
              style={{
                margin: 5,
                width: 89,
                heith: 28,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 6,
                borderRadius: 24,
              }}
            >
              <Entypo name="graduation-cap" size={20} color="black" />
              <Text
                style={{
                  fontWeight: 500,
                  marginLeft: 4,
                }}
              >
                Remote
              </Text>
            </View>
            <View
              style={{
                margin: 5,
                width: 89,
                heith: 28,
                borderWidth: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: 6,
                paddingBottom: 6,
                paddingLeft: 12,
                paddingRight: 12,
                borderRadius: 24,
              }}
            >
              <AntDesign name="clockcircleo" size={18} color="black" />
              <Text
                style={{
                  fontWeight: 500,
                  marginLeft: 4,
                }}
              >
                Remote
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
            borderWidth: 1,
            borderColor: "#e2e8f0",
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="history" size={24} color="black" />
            <Text
              style={{
                fontSize: 12,
                marginLeft: 4,
                fontWeight: 400,
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              Posted 2 days ago
            </Text>
          </View>

          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            $50K/mo
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 6,
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            backgroundColor:
              type === "description" ? "#7e22ce" : "rgba(199, 199, 199, 1)",
            padding: 18,
            borderRadius: 30,
          }}
          onPress={() => setType("description")}
        >
          <Text
            style={{
              color: "#ffffff",
            }}
          >
            Description
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              type === "company" ? "#7e22ce" : "rgba(199, 199, 199, 1)",
            padding: 18,
            borderRadius: 30,
            color: "#ffffff",
          }}
          onPress={() => setType("company")}
        >
          <Text
            style={{
              color: "#ffffff",
            }}
          >
            Company
          </Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor:
              type === "review" ? "#7e22ce" : "rgba(199, 199, 199, 1)",
            padding: 18,
            borderRadius: 30,
            color: "#ffffff",
          }}
          onPress={() => setType("review")}
        >
          <Text
            style={{
              color: "#ffffff",
            }}
          >
            Review
          </Text>
        </Pressable>
      </View>
      {type === "description" ? (
  <ScrollView
    style={{
      marginTop: 5,
    }}
    showsVerticalScrollIndicator={false}
  >
    <View
      style={{
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <View style={{ 
         flexDirection: 'row',
         alignItems: 'center'
       }}>
        <Image source={require('../assets/edit_white.png')} />
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Job Description
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
          marginTop: 20
        }}
      >
        In a UX Designer job, you'll need both types of skills to develop
        the next generation of products. You'll partner with Researchers
        and Designers to define and deliver new features.
      </Text>
    </View>

    <View
      style={{
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <View style={{ 
         flexDirection: 'row',
         alignItems: 'center',
         marginBottom: 20
       }}>
        <Image source={require('../assets/task_alt_white.png')} />
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Skills & Requirements
        </Text>
      </View>
      <Text
        style={{
          fontSize: 14,
        }}
      >
        3 years experience
      </Text>
      <Text
        style={{
          fontSize: 14,
        }}
      >
        Degree in Computer Science, Psychology, Design or any related
        fields
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "rgba(0, 0, 0, 1)",
        }}
      >
        Proficiency in User Personas, Competitive Analysis, Empathy Maps,
        and Information Architecture.
      </Text>
    </View>
    
    <View
      style={{
        backgroundColor: "rgba(242, 242, 242, 1)",
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Skills & Requirements
        </Text>
      </View>
      <Text>3 years experience</Text>
      <Text>
        Degree in Computer Science, Psychology, Design or any related
        fields
      </Text>
      <Text>
        Proficiency in User Personas, Competitive Analysis, Empathy Maps,
        and Information Architecture.
      </Text>
    </View>
  </ScrollView>
) : type === "company" ? (
  <AboutCompany />
) : (
  <ViewJovReview />
)}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <Pressable
          style={{
            width: 113,
            backgroundColor: "rgba(255, 255, 255, 1)",
            paddingTop: 12,
            paddingLeft: 16,
            paddingBottom: 12,
            paddingRight: 16,
            borderRadius: 24,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </Pressable>
        <Pressable
          style={{
            width: 220,
            backgroundColor: "rgba(106, 57, 147, 1)",
            paddingTop: 12,
            paddingLeft: 16,
            paddingBottom: 12,
            paddingRight: 16,
            borderRadius: 24,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={()=>navigation.navigate("application")}
        >
          <Text
            style={{
              color: "white",
              marginRight: 2,
            }}
          >
            Apply Now
          </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ViewJob;
