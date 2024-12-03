import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { API_T } from '@env';
import StackNavigator from './src/navigators/StackNavigator';

export default function App() {
  console.log('APP_ENV:', process.env.APP_ENV);
  console.log('API_T:', API_T);

  if (process.env.REACT_APP_ENV === "development") {
    console.log("This is a development build");
  } else if (process.env.REACT_APP_ENV === "production") {
    console.log("This is a production build");
  }

  return (
    // <SafeAreaView>
    //   <Text>Environment: {process.env.APP_ENV}</Text>
    //   <Text>API_T: {API_T}</Text>
    //   <Text>hiii</Text>
      
    // </SafeAreaView>
    <StackNavigator/>
  );
}
