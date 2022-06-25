import { StyleSheet, Text, View, FlatList, SafeAreaView, Button,  } from 'react-native'
import React, { useState } from 'react'
import MovieScreen from './MovieScreen';


export default function HomeScreen() {

    const DATA = [
        {
          id: '1',
          title: 'First Item',
        },
        {
          id: '2',
          title: 'Second Item',
        },
        {
          id: '3',
          title: 'Third Item',
        },
      ];

    const [counter, setCounter] = useState(0);

    const renderItem = ({ item }) => {
        return(
          <>
              <View style={styles.item}>
                  <Text>{item.id}</Text>
              </View>
              <View>
                <Button
                title='button counter'
                onPress={() => setCounter(counter - 1)}
              >
                Click Me
              </Button>
            </View>
            <View>
              <Text>{counter}</Text>
            </View>
          </>
        )
    }

  return (
    <View style={styles.container}>
        <SafeAreaView>
            <Text style={styles.textColor}>Home</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textColor: {
        color: 'red',
    },
    item: {
        justifyContent: 'center',
        backgroundColor: 'yellow',
        alignItems: 'center',
    },
})