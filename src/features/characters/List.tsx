import React, { memo, useCallback } from 'react';
import { FlatList, Text } from 'react-native';
import { Character } from 'types';

export type Props = {
    characters: Character[];
    onPressCharacter: (character: Character) => void;
};

function keyExtractor(item: Character): string{
    return `${item.id}`;
}

export const CharactersList = memo(({
    characters,
    onPressCharacter,
}: Props) => {
    return (
        <FlatList
            data={characters}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => <Text>{item.name}</Text>}
        />
    );
});