import React from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet } from "react-native";

interface InputBoxProps extends TextInputProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    onBlur: (e: any) => void;
    value: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'numeric' | 'email-address';
    maxLength?: number;
    touched?: boolean; // ✅ Pastikan ini boolean
    errors?: string;
}

const InputBox: React.FC<InputBoxProps> = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  secureTextEntry,
  keyboardType,
  maxLength,
  touched,
  errors,
  ...rest
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        {...rest}
      />
      {/* ✅ Periksa `touched` sebelum menampilkan error */}
      {touched && errors && <Text style={{ color: "red" }}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 68
    },
    textInput: {
        width: 340,
        padding: 9,
        fontSize: 14,
        color: 'gray',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'gray',
        alignSelf: 'center',
    },
});

export default InputBox;
