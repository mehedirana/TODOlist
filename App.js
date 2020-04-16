import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, Card, List } from 'react-native-paper';
import '../../a/todoList/assets/save.png';

import { AsyncStorage } from 'react-native';

class App extends React.Component {

  id = 0;
  arr = []
  state = {
    text: '',
    item: [{ id: 1, data: "loading" }]
  };

  // async componentDidMount(){
  //   const value = JSON.parse( await AsyncStorage.getItem('abc'))
  //   console.log(value)
  // }

  storeData = async () => {
    this.arr.push({ id: this.id, data: this.state.text });
    this.id++

    await AsyncStorage.setItem("abc", JSON.stringify(this.arr));
    this.setState({
      item: JSON.parse(await AsyncStorage.getItem("abc"))
    })
    

    console.log(this.state)
  }
  componentDidMount= async() =>{
    this.setState({
      item: JSON.parse(await AsyncStorage.getItem("abc")) || ""
    })
    this.arr = JSON.parse(await AsyncStorage.getItem("abc")) || []
    this.id=this.arr[this.arr.length-1].id + 1;
    

  }
  render() {
    if (this.state.item.length > 0) {
      dataList = this.state.item.map(item => {

        return (
          <Card key ={item.id} style={{margin:20}}>
            <List.Item
              title={item.data}
              right={() => <List.Icon icon="delete" />}
              onPress={()=>{AsyncStorage.removeItem("abc")}}
            />
          </Card>
        )

      })

    }
    else {

      dataList = <Text>no item</Text>
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <Appbar.Header style={{ backgroundColor: '#0420a3', alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}>
          <Appbar.Content
            title="ToDo List"
            subtitle="Subtitle"
          />
        </Appbar.Header>
        <TextInput
          label=''
          onChangeText={text => this.setState({ text })}
        />
        <Button style={{ margin: 20, backgroundColor: '#0420a3', }} icon={require('../todoList/assets/save.png')} mode="contained" onPress={this.storeData}>
          Save me
        </Button>
        {/* <Text>{this.state.item[0].data}</Text> */}
        <View>
          {dataList}
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#697689',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: '#697689',
    // marginHorizontal: 20,
  },
});


/**mode="contained" onPress={() => console.log('Pressed')} */