import React, { useEffect, useState } from 'react';
import { httpClient } from 'services/apiClient';
import { CharactersList } from './List';

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const { data: { results } } = await httpClient.get('character');
        setCharacters(results);
        }
        fetchData();
      }, []);
    return (<CharactersList characters={characters} onPressCharacter={() => null} />);
};
