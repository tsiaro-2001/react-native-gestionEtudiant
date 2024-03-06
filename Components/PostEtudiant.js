import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'
import AppButton from './AppButton'
import { StyleSheet } from 'react-native'
import Screen from './Screen'
import AppPicker from './AppPicker'
import axios from 'axios'
import AppText from './AppText/AppText'


const validationSchema = Yup.object().shape({
    matricule: Yup.string().required(),
    nom: Yup.string().required(),
    prenom: Yup.string().required(),
    bourse: Yup.string().required(),
})

const categories = [
    {titre: 'tsiaro', value: 1},
    {titre: 'hifaliana', value: 2},
]

const PostEtudiant = ({navigation}) => {
  return (
    <Screen style={styles.container}>
         <Formik
      validationSchema={validationSchema}
      initialValues={{ matricule: '', nom: '', prenom: '', bourse: 0 }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Prevent default form submission
        setSubmitting(true);

        // Send POST request using Axios
        axios
          .post('http://192.168.43.112:5000/api/post', values)
          .then((response) => {
            console.log('Data submitted successfully:', response.data);

            // Reset the form
            resetForm();

            // Handle any additional actions after successful submission
          })
          .catch((error) => {
            console.error('Error submitting data:', error);
            // Handle any error conditions here
          })
          .finally(() => {
            setSubmitting(false);
            navigation.navigate('Etudiant')
          });
      }
      
    }
    >
            {
                ({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppText >Ajout de étudiants</AppText>
                        <AppTextInput
                            placeholder={'matricule'} 
                            autoCapitalize='none'
                            autoCorrect={false}
                            onChangeText={handleChange('matricule')}
                            // onBlur={() => setFieldTouched('title')}
                            onBlur={() => setFieldTouched('matricule')}

                        />
                        <ErrorMessage visible={touched.matricule}>{errors.matricule}</ErrorMessage>
                     
                        <AppTextInput
                            placeholder={'nom'} 
                            onChangeText={handleChange('nom')}
                            onBlur={() => setFieldTouched('nom')}
                        />
                        <ErrorMessage visible={touched.nom}>{errors.nom}</ErrorMessage>
                      
                        <AppTextInput
                            placeholder={'prénom'} 
                            onChangeText={handleChange('prenom')}
                            onBlur={() => setFieldTouched('prenom')}
                            
                        />
                        <ErrorMessage visible={touched.prenom}>{errors.prenom}</ErrorMessage>
                      
                        <AppTextInput
                            placeholder={'bourse'} 
                            keyboardType='numeric'
                            onChangeText={handleChange('bourse')}
                            onBlur={() => setFieldTouched('bourse')}

                            
                        />
                        <ErrorMessage visible={touched.bourse}>{errors.bourse}</ErrorMessage>
                      
                        
                       
                       {/* <AppPicker onChangeText={handleChange('categorie')}  placeholder={'Catégories'} nameIcon='email' categories={categories} /> */}

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


export default PostEtudiant