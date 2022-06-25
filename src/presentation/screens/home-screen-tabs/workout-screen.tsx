import { FC } from 'react';
import { PropsWithChildrenOnly } from '../../../types/props-with-children-only';
import { Box, Input } from 'native-base';
import { FontSizes } from '../../../constants/font-sizes';

const WorkoutScreen: FC<PropsWithChildrenOnly> = () => {
  return (
    <Box mt="2" px="2">
      <Input
        alignSelf="center"
        placeholder="Search workouts"
        borderRadius="4"
        py="2"
        px="2"
        fontSize={FontSizes.body1}
      />
    </Box>
  );
};

export default WorkoutScreen;
