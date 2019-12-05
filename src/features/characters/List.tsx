import React, { memo, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { Character } from 'types';
import { CharacterItem } from './components/CharacterItem';

export type Props = {
    characters: Character[];
    onPressCharacter: (character: Character) => void;
};

function keyExtractor(item: Character): string{
    return `${item.id}`;
};

function renderItem({ item }){
    return(
        <CharacterItem item={item} />
    );
};

export const CharactersList = memo(({
    characters,
    onPressCharacter,
}: Props) => {
    return (
        <FlatList
            data={characters}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
        />
    );
});