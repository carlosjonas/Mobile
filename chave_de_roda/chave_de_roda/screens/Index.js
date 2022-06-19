import React from 'react';
import { View, KeyboardAvoidingView, Image,SafeAreaView, ScrollView, TextInput, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = () => <Avatar.Icon size={40} icon="car" />
const LeftContentMotocycle = () => <Avatar.Icon size={40} icon="motorbike" />
const LeftContentBike = () => <Avatar.Icon size={40} icon="bike" />


export default function Index({navigation}){

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastrar"}]
    })
  }

  const acessar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
  }

  const selecionarcarro = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Carro"}]
    })
  }

  const selecionarmoto = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Moto"}]
    })
  }

  const selecionarbicicleta = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Bicicleta"}]
    })
  }
  
  return (
    <KeyboardAvoidingView style= {styles.background}>
      <ScrollView>
        <TouchableOpacity style= {styles.btnSubmit} onPress={() => acessar(navigation)}>
          <Text style= {styles.submitText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.btnRegister} onPress={() => cadastrar(navigation)}>
            <Text style= {styles.registerText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={{fontSize:50,alignItems:'center'}}> Chave de roda </Text>

      <View style= {styles.containerLogo}>
          
          <SafeAreaView style={styles.card}> 
          
          <Text style={{color: 'black', fontSize:30 }}>Serviços</Text>

            <View style={styles.card}> 
              <Card>
                <Card.Title title="Manutenção de Carros" subtitle="Serviço disponível" left={LeftContent} />
                <Card.Content>
                  <Title>Carro</Title>
                  <Paragraph>Aqui você pode dar manutenção no seu lindo carro, temos revisão, troca de freio e mais.</Paragraph>
                </Card.Content>
                <Card.Cover source={require('../src/assets/carro.jpg')} />
                <Card.Actions>
                  <Button icon="check" onPress={() => selecionarcarro(navigation)}>
                    SELECIONAR
                  </Button>
                </Card.Actions>
              </Card>             
            </View> 

            <View style={styles.card}> 
              <Card>
                <Card.Title title="Manutenção de Motos" subtitle="Serviço disponível" left={LeftContentMotocycle} />
                <Card.Content>
                  <Title>Moto</Title>
                  <Paragraph>Aqui você pode dar manutenção na sua moto, temos revisão, troca de pneu e mais.</Paragraph>
                </Card.Content>
                <Card.Cover source={require('../src/assets/moto.jpg')} />
                <Card.Actions>
                  <Button icon="check" onPress={() => selecionarmoto(navigation)}>
                    SELECIONAR
                  </Button>
                </Card.Actions>
              </Card>             
            </View>

            <View style={styles.card}> 
              <Card>
                <Card.Title title="Manutenção de Bicicletas" subtitle="Serviço disponível" left={LeftContentBike} />
                <Card.Content>
                  <Title>Bicicleta</Title>
                  <Paragraph>Aqui você pode dar manutenção na sua bicicleta, temos lubrificação, troca de freio e mais.</Paragraph>
                </Card.Content>
                <Card.Cover source={require('../src/assets/bike.jpg')} />
                <Card.Actions>
                  <Button icon="check" onPress={() => selecionarbicicleta(navigation)}>
                    SELECIONAR
                  </Button>
                </Card.Actions>
              </Card> 

              
                          
            </View>
        </SafeAreaView> 
         
      </View>

        <View style= {styles.container}>  
          
        </View>
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
    marginTop: 40
  },

  container:{
    flex: 1,
    alignItems: 'center',
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
    width: '25%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom:10
  },

  submitText:{
    color: '#FFF',
    fontSize: 18
  },

  btnRegister:{
    backgroundColor: '#35AAFF',
    width: '25%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  registerText:{
    color: '#FFF',
    fontSize: 18
  },
});