import React, { memo, useCallback } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Theme } from 'config/theme';
import { Character } from 'types';
import { CharacterItem } from './CharacterItem';

export type Props = {
    characters: Character[];
    onEndReached: () => void;
};

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: Theme.baseValue * Theme.dimension.large,
        marginVertical: Theme.baseValue * Theme.dimension.medium,
    },
    list: {
        backgroundColor: Theme.colors.background,
    }
});

function keyExtractor(item: Character): string{
    return `${item.id}`;
};

function renderItem({ item }){
    return (
        <View style={styles.wrapper}>
            <CharacterItem item={item} />
        </View>
    );
}

export const CharactersList = memo(({
    characters,
    onEndReached,
}: Props) => {
    return (
        <FlatList
            style={styles.list}
            data={characters}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onEndReachedThreshold={1}
            onEndReached={onEndReached}
        />
    );
});