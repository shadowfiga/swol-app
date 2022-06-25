import { FC } from 'react';
import { Text } from 'react-native';
import Layout from '../components/layout';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import {
  MenuState,
  useMenuContext,
} from '../../application/context/menu-context';

const HomeScreen: FC<PropsWithChildrenOnly> = () => {
  const { state } = useMenuContext();
  return (
    <Layout>
      {state === MenuState.home && <Text>Home</Text>}
      {state === MenuState.workout && <Text>Workout</Text>}
      {state === MenuState.statistics && <Text>Statistics</Text>}
    </Layout>
  );
};

export default HomeScreen;
