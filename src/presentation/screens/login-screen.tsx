import { FC } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { FontSizes } from '../../constants/font-sizes';

const LoginScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>SwolApp</Text>
      <TextInput placeholder="email" />
      <TextInput placeholder="password" />
      <Button title="login" />
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
