import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Character } from 'types';
import { H1, StatusBadge } from 'components';

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
      backgroundColor: 'white'
    },
    image:{
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    name: {
      fontWeight: 'bold',
    },
    status: {
      
    },
});

export const CharacterItem = ({ item }: Props) => (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri: item.image}} />
        <H1>{item.name}</H1>
        <StatusBadge status={item.status} />
    </View>
);