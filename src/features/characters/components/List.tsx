import React, { memo } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Theme } from 'config/theme';
import { Character } from 'types';
import { CharacterItem } from './CharacterItem';
import { LoaderItem } from './LoadingItem';

export type Props = {
    characters: Character[] | { }[];
    onEndReached: () => void;
};

const styles = StyleSheet.create({
    wrapper: {
        marginHorizontal: Theme.baseValue * Theme.dimension.large,
        marginVertical: Theme.baseValue * Theme.dimension.medium,
    },
    list: {
        backgroundColor: Theme.colors.background,
    },
});

function keyExtractor(item: Character): string{
    return `${item.id}`;
};

function renderItem({ item }){
    if( item.id === 'loading'){
        return (
            <View style={styles.wrapper}>
            <LoaderItem />
        </View>
        )
    }
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
            contentInset={{top: 0, bottom: 60, left: 0, right: 0}}
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}
            data={characters}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            onEndReachedThreshold={1}
            onEndReached={onEndReached}
        />
    );
});