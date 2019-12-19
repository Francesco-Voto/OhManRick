import React, { useCallback } from 'react';
import { TextInput, TextProps, StyleSheet } from 'react-native';
import { Theme } from 'config/theme';

type Props = {
    onChangeText: (text: string) => void;
    text: string;
    style?: TextProps;
};

const styles = StyleSheet.create({
    search: {
      fontSize: Theme.baseValue * Theme.dimension.large, 
      height: Theme.baseValue * Theme.dimension.xxxlarge, 
      borderColor: Theme.colors.primaryText, 
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: 'stretch',
      paddingHorizontal: Theme.baseValue * Theme.dimension.medium,
      color: Theme.colors.primaryText,
    },
});

export const SearchInput = ({
    onChangeText,
    text,
    style,
 }: Props) => {
    const changeTextCallback = useCallback((text) => {
     onChangeText(text); 
    }, [onChangeText]);

  return (
    <TextInput
      style={[style, styles.search]}
      onChangeText={changeTextCallback}
      value={text}
      placeholderTextColor={Theme.colors.secondaryText}
      placeholder="Type here..."
    />
  );
}