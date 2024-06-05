import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListTodo } from './listTodo';
import { AddTodo } from './addTodo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lista">
          <Stack.Screen name="Lista" component={ListTodo} />
          <Stack.Screen name="Adicionar" component={AddTodo} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

export default Routes;