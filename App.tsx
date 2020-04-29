import React from 'react';
import { StyleSheet, Text, View, ToolbarAndroid } from 'react-native';
import Fetch from "react-fetch-component";

/*
	TODO:
	1. Change to tabs appwide
	2. Test Loading state and add spinner
	3. Pull the fetched result into a 'Reader' component
	4. Add all the types and consider some tests
	5. Address warnings
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Fetch url="http://206.189.161.101:8080/api/kjbible/Genesis/1">
		  {
			({loading, error, data}) => (
				(error && console.error(error.stack)),
				(loading && <Text>Loading....</Text>),
				(data && <Text>{JSON.stringify(data)}</Text>)
			)
		  }
	  </Fetch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});