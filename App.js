import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

//root component rendered in app
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  //goal list dynamically rendered
  const [courseGoals, setCourseGoals] = useState([]);

  //responsible for fetching user input
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  //fired when button clicked
  function addGoalHandler() {
    // console.log(enteredGoalText)
    setCourseGoals(currentCourseGoals => [...courseGoals, enteredGoalText]);
    //if new state depends on previous state, the following not the best way to update state
    // setCourseGoals([...courseGoals, enteredGoalText])
  }

  return (
    //view equivalent to div
    //only able to hold other components (ex: need <Text></Text> )
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} />
        {/* Button components do not have style props */}
        <Button
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) =>
            // wrap text in view component so all styles will be applied
            <View key={goal} style={styles.goalItem}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>)}
        </ScrollView>
      </View>
    </View>
  );
}


//Stylesheet objects preferred - reusable
//flex box default behavior
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 5,
    padding: 9,
    borderRadius: 8,
    backgroundColor: '#2283F5',
  },
  goalText: {
    color: '#DEEFFA'
  }
});


//can use both short #fff and long #CCCFFF hex codes as well as utility functions like rgb(), hsl(), or rgba()
//Stylesheet object offers auto-completion
//Also provides validation - will get error if using invalid style properties or values 

//FLEXBOX REACT NATIVE NOTES
//flexbox default behavior for components
//child elements organized as column is default direction
//child elements - align themselves along cross axis by stretching
//configure child elements by how much space it should take of the space it can get along the main axis

//STYLES DONT CASCADE!!
//underlying native component for iOS <Text></Text> does not allow borderRadius prop - add to View


//ScrollView has a LOT of props - some iOS only, Android only or both
//bounce effect - look to docs for