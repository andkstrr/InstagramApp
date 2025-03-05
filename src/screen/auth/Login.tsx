import React from 'react'
import {Formik} from 'formik'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import { AppColor } from '../../utils/AppColor'
import { useNavigation } from '@react-navigation/native'
import { loginInitialValue, loginValidation } from './utils'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Login = () => {
  const navigation = useNavigation()
  const handleLogin = () => {
    console.log('success')
    navigation.navigate('Home')
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image style={{alignSelf: 'center', marginBottom: 70}}  source={require('../../assets/Instagram.png')} />
        <Formik
          initialValues={loginInitialValue}
          validationSchema={loginValidation}
          onSubmit={handleLogin}>
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
                  placeholder={'Username, email address or mobile number'}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  errors={errors.username}
                  touched={touched.username}
                  keyboardType={'default'}
                />
                <InputBox
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  touched={touched.password}
                  errors={errors.password}
                  keyboardType={'default'}
                  secureTextEntry={true}
                />
                <Button buttonTitle={'Login'} onPress={handleLogin} disabled={!isValid} />
              </View>
            );
          }}
        </Formik>
        <Text style={styles.forgotContainer}>Forgot Password?</Text>
      </View>
      <View style={styles.signContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={{color: 'gray'}}>Don't have an account? <Text style={{color: AppColor.BUTTON}}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  forgotContainer: {
    color: 'gray',
    paddingTop: 20,
    textAlign: 'center',
  },
  signContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
