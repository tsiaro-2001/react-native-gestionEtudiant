import React, { Children } from 'react'
import { Image, StyleSheet } from 'react-native'
import { Formik } from 'formik'

import Screen from './Screen'
import AppTextInput from './AppTextInput'
import AppButton from './AppButton'
import * as Yup from 'yup'
import ErrorMessage from './ErrorMessage'

const validationSchma = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(4)
})

const LoginScreen = () => {
  
  return (
    <Screen style={styles.container}>
        <Image style={styles.image} source={require('../assets/logo-red.png')}/>
        <Formik validationSchema={validationSchma} initialValues={{email: '', password:''}} onSubmit={(values) => console.log(values)}>
            {
                ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppTextInput
                            onChangeText={handleChange('email') }
                            placeholder={'email'}  
                            onBlur={() => setFieldTouched('email')}
                            nameIcon={'email'}
                            autoCapitalize='none'
                            autoCorrect={false}
                            keyboardType='email-address'
                            textContentType='emailAddress'
                        />
                         {/* <ErrorMessage error={errors.email} /> */}
                       <ErrorMessage visible={touched.email}>{errors.email}</ErrorMessage>
                        <AppTextInput 
                            onChangeText={handleChange('password')}
                            placeholder={'passwords'}
                            onBlur={() => setFieldTouched('password')}
                            nameIcon={'lock'}
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                        />
                       <ErrorMessage visible={touched.password}>{errors.password}</ErrorMessage>  


                        <AppButton onPress={handleSubmit} >Login</AppButton>
                    </>
                )
            }
        </Formik>
        
    </Screen>
  )
}

const styles = StyleSheet.create({
  image: {
    padding: 20,
    margin: 20,
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  container: {
    padding: 10,
  }
})


export default LoginScreen