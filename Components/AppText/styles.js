import { StyleSheet, Platform } from "react-native"

const styles = StyleSheet.create({
    text: {
      color: 'tomato',
      ...Platform.select({
          ios: {
              fontFamily: 'Avenir' ,
              fontSize: 20 ,
          },
          android: {
              fontSize: 22,
              fontFamily: 'Roboto'
          }
      })
      
    }
  })

  export default styles