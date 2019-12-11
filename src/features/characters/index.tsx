import React, { useEffect, memo } from 'react';
import { CharactersList } from './components/List';
import { useCharactersContext } from './characters.reducer';
import { charactersProvider } from './characters.provider';

export const Characters = memo(() => {
    const { characters, loading, error, setNewCharacters, setLoading, setError } = useCharactersContext();
    const fetchNewCharacters = charactersProvider(setNewCharacters, setLoading, setError);
    useEffect(() => {
        fetchNewCharacters();
    }, [])
    return (
        <CharactersList characters={characters} onEndReached={fetchNewCharacters} />
    );
});