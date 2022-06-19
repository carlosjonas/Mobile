import React, {useState} from 'react';
import { View, KeyboardAvoidingView, Image,SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Avatar,RadioButton,Input, Button, Card, Title, Paragraph } from 'react-native-paper';



export default function Index({navigation}){

    const confirmar = () => {
        alert("Reserva feita com Sucesso, seu veículo será entregue em um dia");
    
        navigation.reset({
          index: 0,
          routes: [{name: "Index"}]
        });
    }

    const cadastrar = () => {
        navigation.reset({
          index: 0,
          routes: [{name: "Cadastrar"}]
        })
      }

    const voltar = () => {
        navigation.reset({
          index: 0,
          routes: [{name: "Index"}]
        })
      }

    const acessar = () => {
        navigation.reset({
          index: 0,
          routes: [{name: "Login"}]
        })
      } 

const [checked, setChecked]=React.useState('null');
const [dado,setDado]=React.useState('');
const [troca,setTroca]=React.useState('Troca de óleo');
const [balanceamento,setBalanceamento]=React.useState('Balanceamento');
const [revisao,setRevisao]=React.useState('Troca de filtro');

const [checkeddia, setCheckeddia]=React.useState('null');
const [segunda,setSegunda]=React.useState('Segunda-feira');
const [terca,setTerca]=React.useState('Terça-feira');
const [quarta,setQuarta]=React.useState('Quarta-feira');
const [quinta,setQuinta]=React.useState('Quinta-feira');
const [sexta,setSexta]=React.useState('Sexta-feira');
const [sabado,setSabado]=React.useState('Sábado');

const [checkedhora, setCheckedhora]=React.useState('null');
const [oito,setOito]=React.useState('Hrs 08:00');
const [nove,setNove]=React.useState('Hrs 09:00');
const [dez,setDez]=React.useState('Hrs 10:00');
const [onze,setOnze]=React.useState('Hrs 11:00');
const [uma,setUma]=React.useState('Hrs 13:00');
const [duas,setDuas]=React.useState('Hrs 14:00');
const [tres,setTres]=React.useState('Hrs 15:00');
const [quatro,setQuatro]=React.useState('Hrs 16:00');

    return (
      <KeyboardAvoidingView style= {styles.background}>
        <ScrollView>
          
        <TouchableOpacity style= {styles.btnSubmit} onPress={() => acessar(navigation)}>
            <Text style= {styles.submitText}>Login</Text>
          </TouchableOpacity>
  
          
          
            <TouchableOpacity style= {styles.btnSubmit} onPress={() => voltar(navigation)}>
                <Text style= {styles.submitText}>Voltar</Text>
            </TouchableOpacity>

          
          <TouchableOpacity style= {styles.btnRegister} onPress={() => cadastrar(navigation)}>
              <Text style= {styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>
          <Text style={{fontSize:20,alignItems:'center'}}> SERVIÇOS </Text>
        
        <View style= {styles.container}>  
            <View style= {{flexDirection:'row', alignItems:'center'}}>
             
                <RadioButton
                    color='black'
                    value='troca'
                    status={checked === 'troca' ? 'checked' : 'unchecked'}
                    onPress={()=> setChecked('troca')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {troca}</Text>
            </View>

            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='balanceamento'
                    status={checked === 'balanceamento' ? 'checked' : 'unchecked'}
                    onPress={()=> setChecked('balanceamento')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {balanceamento}</Text>
            </View>

                <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='revisao'
                    status={checked === 'revisao' ? 'checked' : 'unchecked'}
                    onPress={()=> setChecked('revisao')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {revisao}</Text>
            </View>
            
          </View>

          <Text style={{fontSize:20,alignItems:'center'}}> DIA </Text>
  
        <View style= {styles.container}>  
            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='segunda'
                    status={checkeddia === 'segunda' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('segunda')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {segunda}</Text>
            </View>

            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='terca'
                    status={checkeddia === 'terca' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('terca')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {terca}</Text>
            </View>

            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='quarta'
                    status={checkeddia === 'quarta' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('quarta')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {quarta}</Text>
            </View>
            
            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='quinta'
                    status={checkeddia === 'quinta' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('quinta')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {quinta}</Text>
            </View>

            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='sexta'
                    status={checkeddia === 'sexta' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('sexta')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {sexta}</Text>
            </View>

            <View style= {{flexDirection:'row', alignItems:'center'}}>
                <RadioButton
                    color='black'
                    value='sabado'
                    status={checkeddia === 'sabado' ? 'checked' : 'unchecked'}
                    onPress={()=> setCheckeddia('sabado')}
                /> 
                <Text style={{fontSize:20,alignItems:'center'}}> {sabado}</Text>
            </View>
          </View>

          <Text style={{fontSize:20,alignItems:'center'}}> HORÁRIOS </Text>
  
  <View style= {styles.container}>  
      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='oito'
              status={checkedhora === 'oito' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('oito')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {oito}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='nove'
              status={checkedhora === 'nove' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('nove')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {nove}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='dez'
              status={checkedhora === 'dez' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('dez')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {dez}</Text>
      </View>
      
      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='onze'
              status={checkedhora === 'onze' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('onze')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {onze}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='uma'
              status={checkedhora === 'uma' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('uma')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {uma}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='duas'
              status={checkedhora === 'duas' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('duas')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {duas}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='tres'
              status={checkedhora === 'tres' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('tres')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {tres}</Text>
      </View>

      <View style= {{flexDirection:'row', alignItems:'center'}}>
          <RadioButton
              color='black'
              value='quatro'
              status={checkedhora === 'quatro' ? 'checked' : 'unchecked'}
              onPress={()=> setCheckedhora('quatro')}
          /> 
          <Text style={{fontSize:20,alignItems:'center'}}> {quatro}</Text>
      </View>

    </View>
    
    <TouchableOpacity style= {styles.btnSubmit} onPress={() => confirmar(navigation)}>
          <Text style= {styles.submitText}>Confirmar</Text>
        </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  const styles = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
  
    containerLogo:{
      flex: 1,
      alignItems: 'center',
      marginTop: 200
    },
  
    container:{
      flex: 1,
      justifyContent: 'center',
      width: '90%',
      paddingBottom: 50
    },
  
    card: { 
      flex: 1, 
      paddingTop: 10, 
      backgroundColor: '#ecf0f1',
      marginBottom: 20, 
    }, 
  
    input:{
      backgroundColor: '#FFF',
      width: '90%',
      marginBottom: 15,
      color: '#222',
      fontSize: 17,
      borderRadius: 7
    },
  
    btnSubmit:{
      backgroundColor: '#35AAFF',
      width: '90%',
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 7
    },
  
    submitText:{
      color: '#FFF',
      fontSize: 18
    },
  
    btnRegister:{
      marginTop: 30,
    },
  
    registerText:{
      color: '#FFF',
    },
  });