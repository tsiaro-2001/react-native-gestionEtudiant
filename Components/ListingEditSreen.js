import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'
import AppButton from './AppButton'
import { StyleSheet } from 'react-native'
import Screen from './Screen'
import AppPicker from './AppPicker'

const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    price: Yup.number().required().min(1),
    description: Yup.string().required(),
})

const categories = [
    {titre: 'tsiaro', value: 1},
    {titre: 'hifaliana', value: 2},
]

const ListingEditSreen = () => {
  return (
    <Screen style={styles.container}>
        <Formik validationSchema={validationSchema} initialValues={{title: '', price: '', categorie: '', description: ''}} onSubmit={(values) => console.log(values)}>
            {
                ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppTextInput
                            placeholder={'Title'} 
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('title')}
                            // onBlur={() => setFieldTouched('title')}
                            onBlur={() => setFieldTouched('title')}

                        />
                        <ErrorMessage visible={touched.title}>{errors.title}</ErrorMessage>
                     
                        <AppTextInput
                            placeholder={'Price'} 
                            onChangeText={handleChange('price')}
                            onBlur={() => setFieldTouched('price')}
                            keyBoardType='numeric'
                        />
                        <ErrorMessage visible={touched.price}>{errors.price}</ErrorMessage>
                      
                        <AppTextInput
                            placeholder={'Déscription'} 
                            multiline
                            numberOfLines={3}
                            onChangeText={handleChange('description')}
                            onBlur={() => setFieldTouched('description')}
                        />
                        <ErrorMessage visible={touched.description}>{errors.description}</ErrorMessage>
                       
                       <AppPicker onChangeText={handleChange('categorie')}  placeholder={'Catégories'} nameIcon='email' categories={categories} />

                        <AppButton onPress={handleSubmit}>POST</AppButton>
                    </>
                )
                
            }
        </Formik>
    </Screen>
         
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
})


export default ListingEditSreen