import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Theme } from 'config/theme';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: Theme.dimension.large * Theme.baseValue,
      paddingHorizontal: Theme.dimension.medium * Theme.baseValue,
    },
});

export const LoaderItem = () => (
    <View style={styles.container}>
        <ActivityIndicator size="large" color={Theme.colors.primary} />
    </View>
);