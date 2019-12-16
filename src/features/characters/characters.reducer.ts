import { useReducer } from 'react'
import createUseContext from 'constate';
import { ADD_CHARACTERS, SET_LOADING, SET_ERROR, SEARCH_CHARACTER  } from 'consts/actionsTypes';
import { createReducer } from 'services/reducer';

const initialState = {
  characters: [],
  loading: false,
  error: null,
}

const addCharacters = (state, { newCharacters }) => { 
  return(
    { ...state,
        error: null,
        loading: false,
        characters: [...state.characters, ...newCharacters],
    }
)};

const setLoading = (state, { loading }) => { 
  return(
    { ...state,
        error: null,
        loading,
    }
)};

const setError = (state, { error }) => { 
  return(
    { ...state,
        error,
        loading: false,
    }
)};

const searchCharacter = (state, { newCharacters }) => { 
  return(
    { ...state,
        error: null,
        loading: false,
        characters: newCharacters,
    }
)};

export const reducer = createReducer(initialState, {
  [ADD_CHARACTERS]: addCharacters,
  [SET_LOADING]: setLoading,
  [SET_ERROR]: setError,
  [SEARCH_CHARACTER]: searchCharacter,
});
  

const useCharacters = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { characters, loading, error } = state;
  const setNewCharacters = (newCharacters) => {
    dispatch({
      type: ADD_CHARACTERS,
      payload: { newCharacters }
    });
  };
  const setLoading = (newLoading) => {
    dispatch({
      type: SET_LOADING,
      payload: { newLoading }
    });
  };
  const setError = (newError) => {
    dispatch({
      type: SET_ERROR,
      payload: { newError }
    });
  };
  return { characters, loading, error, setNewCharacters, setLoading, setError };
};

export const useCharactersContext = createUseContext(useCharacters);