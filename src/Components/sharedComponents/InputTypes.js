import { StyleSheet, Text, View } from 'react-native'
import React, { useState , useEffect} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import { COLORS } from '../../constants';

const InputTypes = ({radioButtonLabels,onValueChange }) => {
 const [value, setValue] = useState(null);
const handlePress = (val) => {
    setValue(val); 
    onValueChange(val);  // Send the selected value back to the parent
  };

  return (
    <View>
      <RadioForm
        animation={false}
        radio_props={radioButtonLabels}
        buttonColor={COLORS.$blue_shade_1}
        buttonInnerColor={COLORS.$blue_shade_1}
        selectedButtonColor={COLORS.$blue_shade_1}
        buttonSize={13}
        buttonOuterSize={26}
        initial={-1} // No default selection
        onPress={handlePress}
      />
    </View>
  )
}

export default InputTypes

const styles = StyleSheet.create({})