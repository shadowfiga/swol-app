import { FC, PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Menu from './menu';

const Layout: FC<PropsWithChildren<any>> = (props) => {
  const { children } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{children}</ScrollView>
      <Menu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
