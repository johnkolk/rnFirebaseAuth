import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    fontWeight: '500',
  },
});
