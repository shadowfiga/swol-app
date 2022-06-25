import { FC } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import {
  MenuState,
  useMenuContext,
} from '../../application/context/menu-context';

const Menu: FC<PropsWithChildrenOnly> = () => {
  const { state, setState } = useMenuContext();
  return (
    <View style={styles.container}>
      <Button title="home" onPress={() => setState(MenuState.home)} />
      <Button title="workout" onPress={() => setState(MenuState.workout)} />
      <Button
        title="statistics"
        onPress={() => setState(MenuState.statistics)}
      />
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
