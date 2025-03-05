import React from 'react'
import {Formik} from 'formik'
import InputBox from '../../components/InputBox'
import Button from '../../components/Button'
import {StyleSheet, Text, View, Image} from 'react-native'
import {loginInitialValue, loginValidation} from './utils'

const Login = () => {
  const handleLogin = () => {
    console.log('hello');
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.logoContainer}>
        <Image style={{alignSelf: 'center', marginBottom: 20}}  source={require('../../assets/Instagram.png')} />
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
                  touched={touched.username}
                  errors={errors.username}
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
      </View>
      <View style={styles.signContainer}>
        <Text style={{color: 'gray'}}>Sign Up</Text>
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
  signContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
});
