import { FC } from 'react';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import {
  MenuState,
  useMenuContext,
} from '../../application/context/menu-context';
import { Box, Center, HStack, Pressable, Text } from 'native-base';

const Menu: FC<PropsWithChildrenOnly> = () => {
  const { state, setState } = useMenuContext();
  return (
    <Box width="100%">
      <HStack
        bg="indigo.600"
        alignItems="center"
        justifyContent="space-evenly"
        safeAreaBottom
        shadow={6}
        py="3">
        <Pressable
          onPress={() => setState(MenuState.home)}
          opacity={state === MenuState.home ? 1 : 0.5}>
          <Center>
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          onPress={() => setState(MenuState.workout)}
          opacity={state === MenuState.workout ? 1 : 0.5}>
          <Center>
            <Text color="white" fontSize="12">
              Workout
            </Text>
          </Center>
        </Pressable>
        <Pressable
          onPress={() => setState(MenuState.statistics)}
          opacity={state === MenuState.statistics ? 1 : 0.5}>
          <Center>
            <Text color="white" fontSize="12">
              Statistics
            </Text>
          </Center>
        </Pressable>
        <Pressable
          onPress={() => setState(MenuState.settings)}
          opacity={state === MenuState.settings ? 1 : 0.5}>
          <Center>
            <Text color="white" fontSize="12">
              Settings
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Menu;
