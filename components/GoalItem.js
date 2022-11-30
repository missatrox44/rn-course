//dont need to import react from react

import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {

  //use bind to pre-configure function for future execution
  return (
    <View style={styles.goalItem}>
      <Pressable 
      //android effect
      android_ripple={{ color: '#211bd1' }} 
      onPress={props.onDeleteItem.bind(this, props.id)}
      //iOS effect
      style={({pressed}) => pressed && styles.pressedItem }
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>


  )
};

export default GoalItem;


//can also pass in via props BUT better practice to keep stylesheet with js file its styling
const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 8,
    backgroundColor: '#2283F5',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: '#DEEFFA',
    padding: 9
  }
});


//Touchable is deprecated way - now use Pressable

