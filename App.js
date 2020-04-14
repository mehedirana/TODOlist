import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import '../../a/todoList/assets/save.png';
import { AsyncStorage } from 'react-native';

class App extends React.Component {

  state = {
    text: 'loading'
  }

  async storeData(){
    await AsyncStorage.setItem('abc', 'mehedi');
    const value = await AsyncStorage.getItem('abc')
    console.log(value)
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="ToDo List"
            subtitle="Subtitle"
          />
        </Appbar.Header>
        <TextInput
          label=''
          onChangeText={text => this.setState({ text })}
        />
        <Button icon={require('../todoList/assets/save.png')} mode="contained" onPress={this.storeData}>
          Save me
  </Button>

        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
/**mode="contained" onPress={() => console.log('Pressed')} */