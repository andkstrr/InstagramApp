import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColor} from '../utils/AppColor';

interface ButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({buttonTitle, onPress, disabled}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={{
            width: 340,
            borderRadius: 5,
            backgroundColor: disabled ? AppColor.DISABLE_BUTTON : AppColor.BUTTON,
          }}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
  },
});
