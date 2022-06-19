import React, {useState, useEffect} from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated, Keyboard} from 'react-native';

export default function Login({navigation}){

const [offset] = useState(new Animated.ValueXY({x:0, y:100}));
const[opacity] = useState(new Animated.Value(0));
const [logo] = useState(new Animated.ValueXY({x:130, y:155}));

useEffect(()=> {
KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
KeyboardDidhideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

  Animated.parallel([
  Animated.spring(offset.y,{
  toValue:0,
  speed:4,
  bounciness: 20
    }),
    Animated.timing(opacity, {
      toValue:1,
      duration:200,

    })
  ]).start();
  
  }, []);

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 55,
        duration: 100,
      }),
      Animated.timing(logo.y,{
        toValue: 65,
        duration: 100,
      }),
    ]).start();
    
    

  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue: 130,
        duration: 100,
      }),
      Animated.timing(logo.y,{
        toValue: 155,
        duration: 100,
      }),    
    ]).start();
  }


 const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastrar"}]
    })
  }

  const acessar = () => {
    alert("Bem vindo Usuário");

    navigation.reset({
      index: 0,
      routes: [{name: "Index"}]
    })
  } 

  const voltar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Index"}]
    })
  }
  return (
    <KeyboardAvoidingView style= {styles.background}>
      <View>
      <TouchableOpacity style= {styles.btnSubmit} onPress={() => voltar(navigation)}>
                <Text style= {styles.submitText}>Voltar</Text>
            </TouchableOpacity>
      <Animated.Image style={{width:logo.x, height:logo.y}} source = {require('../src/assets/logo.png')}/>

      </View>
    
      {/*< Image style= {styles.containerLogo} source = {require('../src/assets/logo.png')}/>*/}

      <Animated.View 
        style={[
          styles.container,
            {
              opacity:opacity,
              transform: [
                { translateY: offset.y }
              ]

            }
            ]}>
        <TextInput style= {styles.input} 
        placeholder = "Email"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TextInput style= {styles.input} 
        placeholder = "Senha"
        autoCorrect={false}
        onChangeText={()=> {}}
        />

        <TouchableOpacity style= {styles.btnSubmit} onPress={() => acessar(navigation)}>
          <Text style= {styles.submitText}>Acessar</Text>
        </TouchableOpacity>


        
        <TouchableOpacity style= {styles.btnRegister} onPress={() => acessar(navigation)}>
          <Text style= {styles.btnRegister}>Criar Conta </Text>
        </TouchableOpacity>

        

      </Animated.View>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },

  input:{
    backgroundColor: '#d3d3d3',
    width: '90%',
    marginBottom: 15,
    color: 'black',
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