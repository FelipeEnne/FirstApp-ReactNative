import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  page:{
    width:200,
    height:200,
    backgroundColor:'red'
  },
  text:{
    color:'white'
  }
});


const TextoInit = () => {
  return (
    <SafeAreaView style={style.page}>
      <Text style={{color:'white', fontSize:25}}>Hello</Text>
      <Text style={style.text}>Hello</Text>
      <Text style={[style.text, {fontSize:17}]}>Hello</Text>
    </SafeAreaView>
  )
}

export default TextoInit;