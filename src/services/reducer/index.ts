import { useReducer } from 'react'
import createUseContext from 'constate';
import { ADD_CHARACTERS, SET_LOADING, SET_ERROR, SET_CHARACTERS  } from 'consts/actionsTypes';
import { createReducer } from './utils';

const initialState = {
  characters: [],
  loading: false,
  error: null,
}

const addCharacters = (state, { newCharacters }) => { 
  return(
    { ...state,
        error: null,
        characters: [...state.characters, ...newCharacters],
    }
)};

const changeLoading = (state, { loading }) => { 
  return(
    { ...state,
        loading,
    }
)};

const changeError = (state, { error }) => { 
  return(
    { ...state,
        error,
        loading: false,
    }
)};

const setNewCharacters = (state, { characters }) => {
  return(
    { ...state,
        error: null,
        characters,
    }
)};

export const reducer = createReducer(initialState, {
  [ADD_CHARACTERS]: addCharacters,
  [SET_LOADING]: changeLoading,
  [SET_ERROR]: changeError,
  [SET_CHARACTERS]: setNewCharacters,
});
  

const useCharacters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { characters, loading, error } = state;
  const addNewCharacters = (newCharacters) => {
    dispatch({
      type: ADD_CHARACTERS,
      payload: { newCharacters }
    });
  };
  const setLoading = (loading) => {
    dispatch({
      type: SET_LOADING,
      payload: { loading }
    });
  };
  const setError = (error) => {
    dispatch({
      type: SET_ERROR,
      payload: { error }
    });
  };
  const setNewCharacters = (characters) => {
    dispatch({
      type: SET_CHARACTERS,
      payload: { characters },
    });
  };
  return { characters, loading, error, addNewCharacters, setNewCharacters, setLoading, setError };
};

export const useCharactersContext = createUseContext(useCharacters);
