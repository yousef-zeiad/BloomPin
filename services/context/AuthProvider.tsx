import React, { useEffect, useMemo, useReducer } from 'react';
import localStorageService from 'services/apis/localStorageService';

type AuthContextData = {
  isAppLoading: boolean;
  signIn: (user: any) => void;
  signOut: () => void;
  dispatch: () => void;
  user: null;
};

const initialState = {
  isAppLoading: true,
  user: null,
};

function reducer(prevState: any, action: any) {
  switch (action?.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        user: action.user,
        isAppLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...prevState,
        user: action.user,
        isAppLoading: false,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        user: null,
        isAppLoading: false,
      };
  }
}

const AuthContext = React.createContext<AuthContextData>({
  isAppLoading: true,
  user: null,
  signIn: () => {},
  signOut: () => {},
  dispatch: () => {},
} as AuthContextData);

export const useAuthorization = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('Error');
  }
  return context;
};
export const AuthProvider: React.FC = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async () => {
      let userToken;
      try {
        userToken = await localStorageService.getAccessToken();
        if (userToken) {
          dispatch({ type: 'RESTORE_TOKEN', user: userToken });
        } else {
          dispatch({ type: 'SIGN_OUT' });
        }
      } catch (e) {
        dispatch({ type: 'SIGN_OUT' });
      }
    })();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (user: string) => {
        dispatch({ type: 'SIGN_IN', user });
      },
      signOut: () => {
        localStorageService.clearToken();
        dispatch({ type: 'SIGN_OUT' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ ...state, ...authContext }}>
      {props.children}
    </AuthContext.Provider>
  );
};
