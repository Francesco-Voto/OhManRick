import React, { useEffect, memo } from 'react';
import { CharactersList } from './components/List';
import { useCharactersContext } from './characters.reducer';
import { charactersProvider } from './characters.provider';
import { ActivityIndicator, View } from 'react-native';

export const Characters = memo(() => {
    const { characters, loading, error, setNewCharacters, setLoading, setError } = useCharactersContext();
    const fetchNewCharacters = charactersProvider(setNewCharacters, setLoading, setError);
    useEffect(() => {
        fetchNewCharacters();
    }, [])
    if(loading && characters.length === 0) return <ActivityIndicator />;
    if(error) return <View />;
    return (
        <CharactersList characters={characters} onEndReached={fetchNewCharacters} />
    );
});