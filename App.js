import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import '../../a/todoList/assets/save.png';
import { AsyncStorage } from 'react-native';

class App extends React.Component {

  id = 0;
  arr=[]
  state = {
    text: '',
    item: [{id:1, data:"loading" }]
  };

  // async componentDidMount(){
  //   const value = JSON.parse( await AsyncStorage.getItem('abc'))
  //   console.log(value)
  // }

storeData = async () =>{
    this.arr.push({id: this.id, data: this.state.text});
    this.id++
    
    await AsyncStorage.setItem("abc", JSON.stringify(this.arr));
    this.setState({
      item: JSON.parse(await AsyncStorage.getItem("abc"))
    })
  
    console.log(this.state)
  }
  render() {
     if(this.state.item.length>1){
      dataList = this.state.item.map(item=>{

      return <Text>lsit: {item.id+1} {item.data}</Text>
      })
      
     }
     else{

      dataList = <Text>no item</Text>
     }
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

        {/* <Text>{this.state.item[0].data}</Text> */}
        <View>
          {dataList}
        </View>
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