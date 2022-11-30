//dont need to import react from react

import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {;
  return(
    <View style={styles.goalItem}>
              <Text style={styles.goalText}>{props.text}</Text>
            </View>
  )};

export default GoalItem;


//can also pass in via props BUT better practice to keep stylesheet with js file its styling
const styles = StyleSheet.create({
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