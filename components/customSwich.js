import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";
import constantColors from "../styles/colors";

const CustomSwitch = ({ onValueChange, value }) => {
  const [switchState, setSwitchState] = useState(value);
  const [animatedValue] = useState(new Animated.Value(value ? 1 : 0));

  const handlePress = () => {
    const newValue = !switchState;
    setSwitchState(newValue);
    Animated.timing(animatedValue, {
      toValue: newValue ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    onValueChange(newValue);
  };

  const interpolateColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [constantColors.backgroundColor, "white"], // Customize colors here
  });

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, 20], 
  });
const containerBackgroundColor = switchState?constantColors.backgroundColor:"#ccc";
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:containerBackgroundColor}]} onPress={handlePress}>
      <Animated.View
        style={[
          styles.switch,
          { backgroundColor: interpolateColor },
          { transform: [{ translateX }] },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 30,
    borderRadius: 20,
    
    justifyContent: "center",
    padding: 15,
  },
  switch: {
    width: 20,
    height: 20,
    borderRadius: 15,
    
  },
});

export default CustomSwitch;
