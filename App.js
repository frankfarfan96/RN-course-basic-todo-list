import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enterdGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enterdGoalText);
  }

  return (
    <View style={styles.appContenier}> 
      <View style={styles.inputConteiner}> 
        <TextInput 
            style={styles.textInput}
            placeholder="Your course goal!"
            onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Goals... </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
appContenier: { 
  flex: 1,
  padding: 50,
  paddingHorizontal: 16,
},
inputConteiner: {
  flex: 1,
  flexDirection:"row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
  borderBottomWidth: 1,
  borderBottomColor: "#ccc",
},
textInput: {
  borderWidth: 1,
  borderColor: "#ccc",
  width: "70%",
  marginRight: 8
},
goalsContainer: {
  flex: 5,
}

});
