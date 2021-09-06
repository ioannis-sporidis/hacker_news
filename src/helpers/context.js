import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import { SET_LOADING } from './actions';

const APIENDPOINT = 'http://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true,
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async url => {
    dispatch({ type: SET_LOADING });
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
