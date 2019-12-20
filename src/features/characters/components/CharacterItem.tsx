import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Character } from 'types';
import { H1, StatusBadge } from 'components';
import { Theme } from 'config/theme';

type Props = {
    item: Character;
};

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      elevation: 2,
      shadowOffset:{  width: 0,  height: 0,  },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      backgroundColor: 'white',
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: Theme.dimension.large * Theme.baseValue,
      paddingHorizontal: Theme.dimension.medium * Theme.baseValue,
    },
    image:{
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    name: {
      marginLeft: Theme.dimension.medium * Theme.baseValue,
      marginRight: Theme.dimension.small * Theme.baseValue,
      flexShrink: 1,
    },
    status: {
        position: 'absolute',
        top: Theme.dimension.medium * Theme.baseValue,
        right: Theme.dimension.medium * Theme.baseValue
    },
});

export const CharacterItem = ({ item }: Props) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image}} />
        <H1 style={styles.name} numberOfLines={3}>{item.name}</H1>
        <StatusBadge style={styles.status} status={item.status} />
    </View>
);