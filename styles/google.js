import { StyleSheet } from "react-native";
import constantColors from "./colors";
const googleSheet = StyleSheet.create({
  googleContainer: {
    backgroundColor: "white",
    padding: 13,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 30,
    borderRadius: 10,
    justifyContent: "center",
    borderColor: constantColors.borderColor,
  },
  googleContainerText: {
    fontFamily: "Merriweather-Black",
    fontSize: 15,
    marginLeft: 10,
  },
  googleImage: {
    backgroundColor: "white",
    width: 30,
    height: 30,
  },
});

export default googleSheet