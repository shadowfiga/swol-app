import { FC } from 'react';
import { Text } from 'react-native';
import Layout from '../components/layout';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import {
  MenuState,
  useMenuContext,
} from '../../application/context/menu-context';
import WorkoutScreen from './home-screen-tabs/workout-screen';
import SettingsScreen from './home-screen-tabs/settings-screen';

const HomeScreen: FC<PropsWithChildrenOnly> = () => {
  const { state } = useMenuContext();
  return (
    <Layout>
      {state === MenuState.home && <Text>Home</Text>}
      {state === MenuState.workout && <WorkoutScreen />}
      {state === MenuState.statistics && <Text>Statistics</Text>}
      {state === MenuState.settings && <SettingsScreen />}
    </Layout>
  );
};

export default HomeScreen;
