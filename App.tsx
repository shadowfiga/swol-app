import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppRoutes } from './src/constants/app-routes';
import LoginScreen from './src/presentation/screens/login-screen';
import { FC, PropsWithChildren } from 'react';
import HomeScreen from './src/presentation/screens/home-screen';
import { PropsWithChildrenOnly } from './src/types/props-with-children-only';
import { MenuContextProvider } from './src/application/context/menu-context';

const Stack = createNativeStackNavigator();

const app: FC<PropsWithChildrenOnly> = () => {
  return (
    <NavigationContainer>
      <MenuContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name={AppRoutes.login} component={LoginScreen} />
          <Stack.Screen name={AppRoutes.home} component={HomeScreen} />
        </Stack.Navigator>
      </MenuContextProvider>
    </NavigationContainer>
  );
};

export default app;
