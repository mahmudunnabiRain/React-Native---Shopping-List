import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid';


export default function App() {

  const [items, setItems] = useState([
    {id: uuid() , text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (newText) => {
    if(!newText) {
      Alert.alert('Error', 'Please enter an item', [{text: 'Assa'}]);
    } else {
      setItems(prevItems => {
        return [{id: uuid() ,text: newText}, ...prevItems];
      });
    }
    
  } 

  return (
    <View style={styles.container}>
      <Header title='Shopping List' />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={
        ({item}) => <ListItem item={item} deleteItem={deleteItem} addItem={addItem}/>
        }/>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style = {styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  center: {
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  }
});


const Greeting = (props) => {
  return(
    <View style={[styles.center, {top: 5}]}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}
