import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';



export default function Cadastrar({navigation}){

    const [nome,setNome]= useState('');
    const [email,setEmail]= useState('');
    const [senha,setSenha]= useState('');

    
    const element = <h1>Hello, world</h1>;

    const cadastro = () => {
        alert("Cadastrado com sucesso");

        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
          })
    }

    const voltar = () => {

        navigation.reset({
            index: 0,
            routes: [{name: "Index"}]
          })
    }

    return (
      

      
        <View style= {styles.container}>
             <Text style={{fontSize:20, margin:50}}> 
      FAÇA SEU CADASTRO  </Text>

            <StatusBar hidden />

            <TextInput style= {styles.input} placeholder='Nome Completo' style={styles.textInput} onChangeText={text=>setNome(text)}/>
            <TextInput style= {styles.input} placeholder='Email' style={styles.textInput} onChangeText={text=>setEmail(text)}/>
            <TextInput style= {styles.input} placeholder='Senha' style={styles.textInput} onChangeText={text=>setSenha(text)}/>

            <TouchableOpacity style={styles.btnCadastro} onPress={()=>cadastro()}>
                <Text style={{color: 'white', textAlign: 'center'}}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {styles.btnRegister} onPress={()=>voltar()}>
                <Text style={{color: 'black', textAlign: 'center'}}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      padding: 20
    },

    textInput:{
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom:10
      },

      btnCadastro:{
        backgroundColor: '#35AAFF',
        width: '100%',
        height: 40,
        borderRadius: 20,
        paddingLeft: 10,
        marginBottom:10,
        justifyContent: 'center'
      },
    
      containerLogo:{
        flex: 1,
        alignItems: 'center',
        marginTop: 200
      },
    
      container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
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
        marginTop: 10,
      },
    
      registerText:{
        color: '#FFF',
      },
});