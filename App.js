import React from 'react';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  
`;

const Header = styled.View`
  flex-direction:row;
  justify-content:center;
  align-items:center;
  height:200px;
  background-color:#eee;
  flex-wrap:wrap;
`;

const Square = styled.View`
  width:50px;
  height:50px;
  background-color:${props => props.color};
  font-size:30px;
`;

const TextoInit = () => {
  return (
    <Page>
      <Header>
        <Square  color='red'></Square>
        <Square style={{alignSelf:'flex-end'}} color='green'></Square>
        <Square  color='blue'></Square>
      </Header>
      <Header>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
        <Square  color='red'></Square>
        <Square  color='green'></Square>
        <Square  color='blue'></Square>
      </Header>
    </Page>
  )
}

export default TextoInit;