import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const Textt = styled.Text`
  color:${props=>props.color};
  font-size:15px;
`;

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
      <Textt color="white">Hello</Textt>
      <Textt color="red">Hello</Textt>
      <Textt color="black">Hello</Textt>
    </SafeAreaView>
  )
}

export default TextoInit;