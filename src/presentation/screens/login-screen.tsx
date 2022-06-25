import { FC } from 'react';
import { useNavigator } from '../hooks/use-navigator';
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Link,
  VStack,
} from 'native-base';
import { AppRoutes } from '../../constants/app-routes';

const LoginScreen: FC = () => {
  const { navigate } = useNavigator();

  return (
    <Center w="100%" h="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="coolGray.800">
          SwolApp
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={() => navigate(AppRoutes.home, { merge: true })}>
            Sign in
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
