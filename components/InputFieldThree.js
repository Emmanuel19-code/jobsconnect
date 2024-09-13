import { View, Text } from 'react-native'
import React,{useState} from 'react'
import constantColors from '../styles/colors';
import Feather from "@expo/vector-icons/Feather";
import { Picker } from "@react-native-picker/picker";

const InputFieldThree = ({labelname,customstyles}) => {
    const [selectedEducation, setSelectedEducation] = useState();
  return (
    <View>
      <Text style={[{ marginLeft: 3 }, customstyles]}>{labelname}</Text>
      <View
        style={[
          {
            justifyContent: "start",
            padding:4,
            borderWidth: 1,
            borderColor: constantColors.borderColor,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          },
          customstyles,
        ]}
      >
        <Feather name="mail" size={24} color="#e2e8f0" />
        <Picker
         style={{ flex:1 }}
          selectedValue={selectedEducation}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedEducation(itemValue)
          }
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
}

export default InputFieldThree