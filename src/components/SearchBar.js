import { SafeAreaView, StyleSheet, View, TextInput, Button, Keyboard } from "react-native"
import { useState } from 'react';

export default function SearchBar () {

    const [search, setSearch] = useState();
    const [onClick, setOnClick] = useState();

    return (
      <SafeAreaView style={styles.container}>
        <View style={onClick ? styles.inputClicked : styles.inputUnClicked}>
        <TextInput 
          style={styles.input}
          placeholder='Search Movies...'
          onChangeText={setSearch}
          value={search}
          onFocus={() => {
            setOnClick(true);
          }}
        />
        </View>
        {onClick && (
            <View>
                <Button
                    title="Cancel"
                    onPress={() => {
                        Keyboard.dismiss();
                        setOnClick(false);
                    }}
                />
            </View>
      )}
      </SafeAreaView>
      
    )
  }

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%'
    },
    input: {
        fontSize: 20,
        marginLeft: 10,
        width: '90%'
    },
    inputClicked: {
        padding: 10,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: '#d9dbda',
        borderRadius: 15,
        alignItems: 'center'
    },
    inputUnClicked: {
        padding: 10,
        flexDirection: 'row',
        width: '95%',
        backgroundColor: '#d9dbda',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    }
})