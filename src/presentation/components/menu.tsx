import { FC } from 'react';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import {
  MenuState,
  useMenuContext,
} from '../../application/context/menu-context';
import { Box, Center, HStack, Pressable, Text } from 'native-base';

const Menu: FC<PropsWithChildrenOnly> = () => {
  const { setState } = useMenuContext();
  return (
    <Box width="100%">
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable py="3" flex={1} onPress={() => setState(MenuState.home)}>
          <Center>
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} onPress={() => setState(MenuState.workout)}>
          <Center>
            <Text color="white" fontSize="12">
              Workout
            </Text>
          </Center>
        </Pressable>
        <Pressable
          py="2"
          flex={1}
          onPress={() => setState(MenuState.statistics)}>
          <Center>
            <Text color="white" fontSize="12">
              Statistics
            </Text>
          </Center>
        </Pressable>
        <Pressable py="2" flex={1} onPress={() => setState(MenuState.settings)}>
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
