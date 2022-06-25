import { FC } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { FontSizes } from '../../constants/font-sizes';
import { useNavigator } from '../hooks/use-navigator';
import { AppRoutes } from '../../constants/app-routes';

const LoginScreen: FC = () => {
  const { navigate } = useNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SwolApp</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <Button
        title="login"
        onPress={() => {
          navigate(AppRoutes.home, {
            merge: true,
          });
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FontSizes.title1,
  },
});

export default LoginScreen;
