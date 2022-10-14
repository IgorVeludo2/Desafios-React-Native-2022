import { Text, TouchableOpacity, View, Image} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import trash from "../../../assets/trash.png"
import { useState } from "react";
import { styles } from "./styles";

type Props = {
  description: string;
  onRemove: () => void;
  isChecked: () => void;
}

export function Todo({ description, onRemove, isChecked }: Props) {
  const [isSelected, setSelection] = useState(false);

  return(
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor={'#4EA8DE'}
        innerIconStyle={{ borderWidth: 2 }}
        onPress={() => {
          setSelection(!isSelected)
          isChecked()
        }}
      />
      <Text 
        style={isSelected ? {
          flex: 1,
          padding: 1,
          color: '#FFF',
          textDecorationLine: 'line-through',
          fontSize: 18
        } : styles.text}
      >
        {description}
      </Text>
      <TouchableOpacity style={styles.removeButton} onPress={onRemove}>
      <Image 
        style={styles.img}
        source={trash} 
      />
      </TouchableOpacity>
    </View>
  )
}