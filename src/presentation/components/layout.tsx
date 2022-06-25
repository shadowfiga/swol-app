import { FC } from 'react';
import Menu from './menu';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';
import { Box, ScrollView } from 'native-base';

const Layout: FC<PropsWithChildrenOnly> = (props) => {
  const { children } = props;
  return (
    <Box flex="1" width="100%" safeAreaTop safeAreaBottom>
      <ScrollView flex="1">{children}</ScrollView>
      <Menu />
    </Box>
  );
};

export default Layout;
