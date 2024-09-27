import { View, Text,Image,Pressable } from 'react-native'
import React from 'react'
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";

const RecentJob = ({routename,navigation}) => {
  return (
    <View
      style={{
        height: 237,
        borderRadius: 15,
        marginTop: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "#5424FD",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 48,
              height: 48,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 2,
              marginHorizontal: 4,
              backgroundColor: "black",
              borderRadius: 5,
            }}
          >
            <Image
              source={require("../assets/google1.png")}
              style={{
                width: 25,
                height: 25,
                tintColor: "white",
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "white",
                fontSize: 18,
              }}
            >
              Sr. UX Designer
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 12,
              }}
            >
              Google
            </Text>
          </View>
          <Pressable
            style={{
              backgroundColor: "white",
              padding: 5,
              width: 86,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress = {()=>navigation.navigate(routename)}
          >
            <Text>View</Text>
            <View
              style={{
                borderBottomWidth: 1,
              }}
            >
              <Feather name="arrow-up-right" size={24} color="black" />
            </View>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View
            style={{
              width: 100,
              paddingLeft: 6,
              paddingRight: 6,
              paddingTop: 6,
              paddingBottom: 6,
              flexDirection: "row",
              borderRadius: 24,
              margin: 2,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvilIcons name="location" size={20} color="white" />
            <Text style={{ color: "white" }}>New York</Text>
          </View>
          <View
            style={{
              width: "auto",
              paddingLeft: 6,
              paddingRight: 6,
              paddingTop: 6,
              paddingBottom: 6,
              flexDirection: "row",
              borderRadius: 24,
              margin: 2,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="graduation-cap" size={20} color="white" />
            <Text style={{ color: "white", marginLeft: 3 }}>3 years exp</Text>
          </View>
          <View
            style={{
              width: "auto",
              paddingLeft: 6,
              paddingRight: 6,
              paddingTop: 6,
              paddingBottom: 6,
              flexDirection: "row",
              borderRadius: 24,
              margin: 2,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="clockcircleo" size={18} color="white" />
            <Text style={{ color: "white", marginLeft: 3 }}>Fulltime</Text>
          </View>
        </View>
        <Text style={{ marginTop: 15, fontSize: 12, color: "#FFFFFF" }}>
          UX Designers are the synthesis of design and development. They take
          Googl's most innovative product concepts...
          <Text
            style={{
              textDecorationLine: "underline",
            }}
          >
            Read More
          </Text>
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          borderWidth: 1,
          borderColor: "#e2e8f0",
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
              fontWeight: "500",
              marginLeft: 2,
            }}
          >
            Posted 2 days ago
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          1.5K/mo
        </Text>
      </View>
    </View>
  );
}

export default RecentJob