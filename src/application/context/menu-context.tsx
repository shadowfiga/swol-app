import {
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
} from 'react';
import { PropsWithChildrenOnly } from '../../types/props-with-children-only';

export enum MenuState {
  home,
  workout,
  statistics,
  settings,
}

interface MenuContext {
  state: MenuState;
  setState: (state: MenuState) => void;
}

const MenuContext = createContext<MenuContext>({
  state: MenuState.home,
} as MenuContext);

export const MenuContextProvider: FC<PropsWithChildrenOnly> = (props) => {
  const { children } = props;
  const [state, setState] = useState<MenuState>(MenuState.home);

  const updateState = useCallback(
    (updatedState: MenuState) => {
      if (updatedState === state) {
        return;
      }
      setState(updatedState);
    },
    [state, setState],
  );

  return (
    <MenuContext.Provider
      value={{
        state,
        setState: updateState,
      }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
