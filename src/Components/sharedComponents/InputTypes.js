import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from '../../constants';

const InputTypes = ({
  radioButtonLabels,
  checkBoxLabels,
  onValueChange,
  onValueCheckBoxChange,
  radioButton,
  checkBox,
}) => {
  const [selectedRadioValue, setSelectedRadioValue] = useState(null);
  const [checkedValues, setCheckedValues] = useState([]);

  const handleRadioPress = val => {
    setSelectedRadioValue(val);
    onValueChange(val);
  };

  const handleCheckBoxPress = value => {
    const updatedCheckedValues = checkedValues.includes(value)
      ? checkedValues.filter(item => item !== value)
      : [...checkedValues, value];

    setCheckedValues(updatedCheckedValues);
    onValueCheckBoxChange(updatedCheckedValues);
  };

  return (
    <View>
      {radioButton && (
        <RadioForm
          animation={false}
          radio_props={radioButtonLabels}
          buttonColor={COLORS.$blue_shade_1}
          buttonInnerColor={COLORS.$blue_shade_1}
          selectedButtonColor={COLORS.$blue_shade_1}
          buttonSize={13}
          buttonOuterSize={26}
          initial={-1} // No default selection
          onPress={handleRadioPress}
        />
      )}

      {checkBox &&
        checkBoxLabels.map((item, index) => (
          <BouncyCheckbox
          style={styles.trcontainer}
            key={index}
            size={25}
            fillColor={COLORS.$blue_shade_1}
            iconStyle={styles.iconStyle}
            innerIconStyle={styles.innerIconStyle}
            textStyle={styles.textStyle}
            unfillColor="#FFFFFF"
            text={item.label}
            isChecked={checkedValues.includes(item.value)}
            onPress={() => handleCheckBoxPress(item.value)}
            bounceEffectIn={1}
            bounceEffectOut={1}
          />
        ))}
    </View>
  );
};

export default InputTypes;

const styles = StyleSheet.create({
  iconStyle: {
    borderColor: 'red',
    borderRadius: 5
},
innerIconStyle: {
    borderWidth: 2,
    borderRadius: 5
},
textStyle: {
    textDecorationLine: 'none',
    color: COLORS.$black,
    // backgroundColor: 'red',
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 18
},
trcontainer: {
  // backgroundColor: 'green'
},
});
