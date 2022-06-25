import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './src/constants/app-routes';
import LoginScreen from './src/presentation/screens/login-screen';
import { FC, PropsWithChildren } from 'react';

const Stack = createNativeStackNavigator();

const app: FC<PropsWithChildren<any>> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={AppRoutes.login} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;
