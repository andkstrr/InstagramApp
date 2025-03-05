import React from 'react'
import {Formik} from 'formik'
import Button from '../../components/Button'
import { AppColor } from '../../utils/AppColor'
import InputBox from '../../components/InputBox'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { signUpInitialValue, signUpValidation } from './utils'

const SignUp = () => {
  const navigation = useNavigation()
  const handleSignUp = () => {
    console.log('hello');
  };
  return (
    <View style={styles.signupContainer}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 15, fontWeight: 600, color: 'gray', marginBottom: 20}}>
            Sign Up with your mobile phone
        </Text>
        <Formik
          initialValues={signUpInitialValue}
          validationSchema={signUpValidation}
          onSubmit={handleSignUp}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => {
            return (
              <View>
                <InputBox
                  placeholder={'Mobile Number'}
                  onChangeText={handleChange('number')}
                  onBlur={handleBlur('number')}
                  value={values.number}
                  touched={touched.number}
                  errors={errors.number}
                  maxLength={13}
                  keyboardType={'numeric'}
                />
                <Button buttonTitle={'Sign Up'} onPress={handleSignUp} disabled={!isValid} />
              </View>
            );
          }}
        </Formik>
      </View>
      <View style={styles.signContainer}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Text style={{color: 'gray'}}>Already have an account? <Text style={{color: AppColor.BUTTON}}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    flex: 0.8,
    justifyContent: 'center'    ,
  },
  signContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
