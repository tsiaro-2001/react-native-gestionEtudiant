import React from 'react'

const Texte = () => {
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
       }}>
          <Text style={{
            fontSize: 30,
            fontFamily: 'Roboto',
            fontStyle: 'italic',
            fontWeight: 'bold',
            color: 'tomato'
          }}> I love react native</Text>
            
       </View>
  )
}

export default Texte