import { StyleSheet } from "react-native";
import constantColors from "./colors"

const homestyles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f5f9",
    height: "100%",
    padding: 10,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  secondContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    padding: 10,
    height: 300,
    borderTopRightRadius: 30,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  secondContainerHeading: {
    fontSize: 25,
    width: 250,
    textAlign: "center",
    fontFamily: "Poppins-Black",
  },
  secondContainerSubHeading: {
    textAlign: "center",
    width: 220,
    fontSize: 15,
    marginTop: 10,
    color: "#64748b",
  },
  thirdContainter: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  buttonOne: {
    width: 100,
    height: 40,
    backgroundColor: constantColors.backgroundColor,
    opacity: 0.8,
    padding: 8,
    textAlign: "center",
    borderRadius: 7,
    color: "white",
    margin: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});

export default homestyles