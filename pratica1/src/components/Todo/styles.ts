import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: '#333333',
    borderRadius: 7,
    padding: 7,
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 5
  },
  checkbox: {
    marginLeft: 5
  },
  text: {
    flex: 1,
    padding: 1,
    color: '#FFF',
    fontSize: 18
  },
  removeButton: {
    backgroundColor: "transparent",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 32,
    height: 32
  }
})