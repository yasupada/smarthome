import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ComponetElement = ({hint, onValueChanged, inputType, isPassword, iconName}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* Icon */}
      {/* <Icon name={iconName} size={35} /> */}
      <Input
        autoCapitalize="none"
        onChangeText={onValueChanged}
        inputContainerStyle={{borderBottomWidth:0}} 
        placeholder={hint}
        keyboardType={inputType}
        secureTextEntry={isPassword}
        style={{
          backgroundColor: '#0001',
          flex: 1,
          marginLeft: 8,
          borderRadius: 8,
          marginRight: 8,
          paddingLeft: 16,
        }}
      />
    </View>
  );
};

export default function RegisterScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  
  React.useEffect(() => {
    setNavigationOption();
  });

  onSubmit = async () => {
    await AsyncStorage.setItem('username', username);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);
    await AsyncStorage.setItem('confirmPassword', confirmPassword);
    navigation.goBack();
    //navigation.navigate("Pin");
  };

  setNavigationOption = () => {
    navigation.setOptions({
      headerShown: false,
      title: 'Register',
      headerStyle: {
        backgroundColor: '#999CED',
      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {color: '#fff'},
      headerBackTitle: ' ',
    });
  };

  return (
    <ImageBackground
      source={require('./assets/img/bg1.png')}
      style={{backgroundColor: '#eee', flex: 1}}>
      {/* Login section */}
      <View
        style={{
          flex: 0.65,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
          marginRight: 30,
          flexDirection: 'column',
          backgroundColor: '#fff',
          paddingTop: 30,
          paddingLeft: 30,
          paddingRight: 30,
        }}>
          <View>
        <Image style={{
          borderRadius: 0,
          marginTop: '10%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '15%',
          flexDirection: 'row',
          backgroundColor: '#fff3'
        }} source={require('./assets/img/Banner.png')} />
        </View>
        {/* Username  */}
        <ComponetElement
          iconName="user"
          inputType="email-address"
          hint="Username"
          onValueChanged={(text) => {
            setUsername(text);
            console.log('username: ' + username);
          }}
        />
        <View style={{height: 8}} />

        <ComponetElement
          iconName="email"
          inputType="email-address"
          hint="Email"
          onValueChanged={(text) => {
            setEmail(text);
            console.log('email: ' + email);
          }}
        />
        <View style={{height: 8}} />

        {/* Password  */}
        <ComponetElement
          iconName="lock"
          isPassword
          hint="Password"
          onValueChanged={(text) => {
            setPassword(text);
            console.log('password: ' + password);
          }}
        />

        {/* Confirm Password  */}
        <ComponetElement
          iconName="lock"
          isPassword
          hint="Confirm Password"
          onValueChanged={(text) => {
            setConfirmPassword(text);
            console.log('confirm password: ' + confirmPassword);
          }}
        />

        {/* Register Button */}
        <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
          {/* <Button title="Register" onPress={onSubmit} /> */}
          <TouchableOpacity style={{
            width: 70,
            height: 30,
            borderColor: "#0004",
            borderWidth: 1,
            marginTop: 8,
            marginBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: '#373737', 
            borderRadius: 7}} title="Register" onPress={onSubmit}>
            <Text style={{color: '#F1F1F1', fontWeight: '800'}}>register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
