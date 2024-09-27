import { View, Text, ScrollView,Image } from "react-native";
import React from "react";

const ViewJovReview = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(242, 242, 242, 1)",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={require("../assets/edit_white.png")} />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Company Reviews
          </Text>
        </View>
        <View>
          <View>
            <Text style={{ 
                 fontSize:40,
                 fontWeight:700
             }}>4</Text>
            <View style={{ flexDirection:'row' }}>
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require("../assets/Star.png")} />
              <Image source={require('../assets/ashstar.png')}/>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text>1,000</Text>
              <Text>reviews</Text>
            </View>
          </View>
          <View>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewJovReview;
