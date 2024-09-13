import { StyleSheet } from "react-native";
import constantColors from "./colors";

const loginStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
    height: "100%",
  },
  headerOne: {
    fontFamily: "Merriweather-Black",
    fontSize: 25,
  },
  headerTwo: {
    color: "#64748b",
    marginTop: 10,
  },
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
  googleImage: {
    backgroundColor: "white",
    width:30,
    height: 30,
  },
  googleContainerText: {
    fontFamily: "Merriweather-Black",
    fontSize: 15,
    marginLeft: 10,
  },
  textOne: {
    fontFamily: "Merriweather-Black",
  },
  horinzontalLine: {
    height: 1,
    flex:1, 
    backgroundColor: constantColors.borderColor,
    margin:10 
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop:25
  },
});

export default loginStyles