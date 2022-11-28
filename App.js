import { StyleSheet, Text, View, Button } from 'react-native';

//root component rendered in app
export default function App() {
  return (
    //view equivalent to div
    //only able to hold other components (ex: need <Text></Text> )
    <View style={styles.container}>
      {/* Can have nested components */}
      <View>
        <Text style={styles.dummyText}>Another piece of text</Text>
      </View>
      {/* add styles by inline styles - object props */}
      <Text style={{ 
        margin: 16, 
        borderWidth: 2, 
        borderColor: 'red', 
        padding: 16 }}>
        Hello World!!!!
      </Text>
      {/* button is self closing with title prop */}
      <Button title='Tap me!' />

    </View>
  );
}


//Stylesheet objects preferred - reusable
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16, 
     borderWidth: 2, 
     borderColor: 'red', 
     padding: 16
  }
});


//can use both short #fff and long #CCCFFF hex codes as well as utility functions like rgb(), hsl(), or rgba()
//Stylesheet object offers auto-completion
//Also provides validation - will get error if using invalid style properties or values