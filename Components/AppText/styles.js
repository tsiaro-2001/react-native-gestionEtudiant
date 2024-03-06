import { StyleSheet, Platform } from "react-native"
import colors from "../../config/colors"

const styles = StyleSheet.create({
    text: {
      color: colors.primary,
      ...Platform.select({
          ios: {
              fontFamily: 'Avenir' ,
              fontSize: 20 ,
          },
          android: {
              fontSize: 20,
              fontFamily: 'Roboto'
          }
      })
      
    }
  })

  export default styles