import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

//root component rendered in app
export default function App() {
  return (
    //view equivalent to div
    //only able to hold other components (ex: need <Text></Text> )
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}


//Stylesheet objects preferred - reusable
//flex box out of the box
const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});


//can use both short #fff and long #CCCFFF hex codes as well as utility functions like rgb(), hsl(), or rgba()
//Stylesheet object offers auto-completion
//Also provides validation - will get error if using invalid style properties or values 