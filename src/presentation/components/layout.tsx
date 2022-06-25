import { FC, PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Menu from './menu';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import { MenuContextProvider } from '../../application/context/menu-context';

const Layout: FC<PropsWithChildrenOnly> = (props) => {
  const { children } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>{children}</ScrollView>
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
