import { AppRoutes } from '../../constants/app-routes';
import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

interface NavigationOptions {
  merge?: boolean;
  params?: any;
}

interface UseNavigatorResult {
  navigate: (screen: AppRoutes | string, options?: NavigationOptions) => void;
}

export const useNavigator = (): UseNavigatorResult => {
  const navigation = useNavigation();

  const navigate = useCallback(
    (screen: string, options?: NavigationOptions) => {
      navigation.navigate({
        name: screen,
        params: options?.params,
        merge: options?.merge,
      } as any);
    },
    [navigation],
  );

  return {
    navigate,
  };
};
