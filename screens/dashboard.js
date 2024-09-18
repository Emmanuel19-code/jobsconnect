import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import containerStyles from "../styles/constant";
import AntDesign from "@expo/vector-icons/AntDesign";
import RecommendedJobs from "../components/recommendedJobs";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
const Dashboard = () => {
  return (
    <SafeAreaView style={containerStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "rgba(106, 57, 147, 1)",
              }}
            >
              Hello Emmanuel 👋
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/profile.png")}
              style={{
                marginRight: 4,
              }}
            />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: "background: rgba(106, 57, 147, 1);",
          }}
        >
          Start Your New Journey
        </Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              padding: 7,
              borderColor: "#e2e8f0",
              borderWidth: 1,
              flex: 1,
              margin: 2,
              borderRadius: 6,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholder="Search for company or roles..."
              placeholderTextColor="black"
              style={{
                marginLeft: 5,
              }}
            />
          </View>
          <Pressable
            style={{
              padding: 4,
              backgroundColor: "#6A3993",
              marginLeft: 6,
              width: 50,
              height: 50,
              borderRadius: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="filter" size={24} color="white" />
          </Pressable>
        </View>
        <Text
          style={{
            marginTop: 10,
            fontFamily: "Merriweather-Black",
            fontSize: 15,
          }}
        >
          For you
        </Text>
        <View
          style={{
            backgroundColor: "#6A3993",
            padding: 10,
            height: 156,
            borderRadius: 10,
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Merriweather-Black",
                color: "#FFFFFF",
                fontSize: 20,
                width: 190,
                height: 56,
                fontWeight: "700",
              }}
            >
              Let's find suitable job for you!
            </Text>
            <Text
              style={{
                width: 172,
                height: 50,
                color: "#FFFFFF",
                fontWeight: "300",
              }}
            >
              Get more attention and better chance at finding a great job
            </Text>
          </View>
          <View
            style={{
              width: 142,
              height: 236,
              position: "absolute",
              left: 170,
              top: -60,
            }}
          >
            <Image
              source={require("../assets/peoplesearching.png")}
              style={{ width: 142, height: 236 }}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: "Merriweather-Black" }}>
            Recommended Jobs
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <RecommendedJobs />
            <RecommendedJobs />
            <RecommendedJobs />
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Recent Jobs
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "#6A3993",
              fontWeight: "400",
            }}
          >
            More
          </Text>
        </View>
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
                <Text style={{ color: "white", marginLeft: 3 }}>
                  3 years exp
                </Text>
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
              UX Designers are the synthesis of design and development. They
              take Googl's most innovative product concepts...
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
