import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

//root component rendered in app
export default function App() {

  //goal list dynamically rendered
  const [courseGoals, setCourseGoals] = useState([]);

  //fired when button clicked
  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...courseGoals, { text: enteredGoalText, key: Math.random().toString() }]);
  }

  return (
    //view equivalent to div
    //only able to hold other components (ex: need <Text></Text> )
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} /> 
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem text={itemData.item.text} />
          )
        }} alwaysBounceVertical={false} />
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
  goalsContainer: {
    flex: 5
  },
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
//ScrollView not good for lists instead use FlatList
//ScrollView renders ALL child items - long list means performance issue

//use keyExtractor prop takes in function -> takes in item/index provided by FlatList, used to get key for every item