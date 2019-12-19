import React, { memo, useCallback, useEffect, useState } from 'react';
import { useCharactersContext } from 'services/reducer';
import { CharactersList } from './components/List';
import { charactersProvider } from './characters.provider';

export const Characters = memo(() => {
    const { characters, loading, error, addNewCharacters, setLoading, setError } = useCharactersContext();
    const fetchNewCharacters = charactersProvider(addNewCharacters, setLoading, setError);

    useEffect(() => {
        fetchNewCharacters();
    },[]);

    // useEffect(() => {
    //     if(loading){
    //         characters.push({ id: "loading" });
    //         setLoadingPosition(characters.length -1);
    //     } else {
    //         characters.splice(loadingPosition, 1);
    //     }
    // }, [loading]);

    const onEndReached = useCallback(() => {
        if(!loading) fetchNewCharacters();
    }, [fetchNewCharacters]);

    return (
        <CharactersList characters={characters} onEndReached={onEndReached} />
    );
});