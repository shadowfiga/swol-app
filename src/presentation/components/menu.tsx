import { FC, PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Menu: FC<PropsWithChildren<any>> = () => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
      <Text>workout</Text>
      <Text>statistics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
});

export default Menu;
