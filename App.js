import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import blogScreen from './src/screen/blog';
import blogDetailScreen from './src/screen/blogDetail';
import {ContextProvider} from './src/context/ContextProvider';
export default function App() {
  const Stack = createStackNavigator();
  const BlogCreate = () => {
    return (
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          options={{headerShown: false}}
          name="Blog"
          component={blogScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
            headerBackTitle: '',
            headerTitle: '',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
          }}
          name="BlogDetail"
          component={blogDetailScreen}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <ContextProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BlogCreate}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </ContextProvider>
    </NavigationContainer>
  );
}
