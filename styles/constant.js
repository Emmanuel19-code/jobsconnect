import { StyleSheet } from "react-native"
import constantColors from "./colors";



const containerStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    height: "100%",
  },
  horinzontalLine: {
    height: 1,
    flex: 1,
    backgroundColor: constantColors.borderColor,
    margin: 10,
  },
});

export default containerStyles