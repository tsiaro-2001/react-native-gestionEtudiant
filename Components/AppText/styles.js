import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
    text: {
      color: 'tomato',
      ...Platform.select({
          ios: {
              fontFamily: 'Avenir' ,
              fontSize: 18 ,
          },
          android: {
              fontSize: 18,
              fontFamily: 'Roboto'
          }
      })
      
    }
  })

  export default styles