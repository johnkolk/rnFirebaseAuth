import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
    console.log('onLoginPress ');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onLoginPress} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onLoginPress}
          style={[styles.button, styles.buttonOutline]}>
          <Text style={[styles.buttonText, styles.buttonTextOutline]}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 5,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '60%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0782F9',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 5,
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: '#0782F9',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTextOutline: {
    color: '#0782F9',
  },
});

export default Login;
