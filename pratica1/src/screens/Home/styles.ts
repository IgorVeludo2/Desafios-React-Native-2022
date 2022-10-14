import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
  },
  header: {
    height: '22%',
    padding: 24,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 32,
    width: 110
  },
  inputContainer: {
   marginTop: -60,
   width: '100%',
   flexDirection: 'row'
  },
  input: {
    height: 60,
    flex: 1,
    padding: 16,
    borderRadius: 5,
    fontSize: 18,
    backgroundColor: '#262626',
    color: '#fdfcfe',
    marginRight: 6
  },
  button: {
    height: 60,
    width: 60,
    backgroundColor: '#1E6F9F',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 24,
    color: '#fff'
  },
  todosContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  openTodo: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 15,
  },
  closedTodo: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 15,
  },
  resultTodo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    padding: 7,
    borderRadius: 12,
    width: 28,
    height: 28,
    marginRight: 130
  },
  resultFont: {
    fontSize: 14,
    color: '#FFF',
  },
  line: {
    width: '100%',
    marginTop: 12,
    height: '0.1%',
    backgroundColor: '#333333',
    marginBottom: 12
  }
})