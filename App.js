import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

//root component rendered in app
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  //fired when button clicked
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...courseGoals, { text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    // console.log('DELETE')
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#2283F5' onPress={startAddGoalHandler} />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false} />
        </View>
      </View>
    </>
  );
}


//Stylesheet objects preferred - reusable
//flex box default behavior
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
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


//If want to customize Button, need to build your own button with Pressable component.
//Button doesnt take style props