import React, { useState, memo, useCallback } from 'react';
import { SearchInput } from './components/SearchInput';
import { View, StyleSheet } from 'react-native';
import { Theme } from 'config/theme';
import debounce from 'lodash.debounce';
import { useCharactersContext } from 'services/reducer';
import { baseUrlProvider } from 'services/data/urlProvider';
import { searchProvider } from './search.provider';


const styles = StyleSheet.create({
    header: {
      paddingHorizontal: Theme.baseValue * Theme.dimension.large, 
      paddingVertical: Theme.baseValue * Theme.dimension.xlarge, 
      alignItems: 'center',
      shadowColor: "#000",
      shadowOffset: {
         width: 2,
         height: 5,
      },
      shadowOpacity: 0.5,
      shadowRadius: 1.00,
      elevation: 5,
      backgroundColor: 'white',
    },
});

export const Search = memo(() => {
    const [text, setText] = useState('');
    const { setNewCharacters, setLoading, setError } = useCharactersContext();
    const fetchNewCharacters = debounce(searchProvider(setNewCharacters, setLoading, setError), 300);
    
    const setNewText = useCallback((text: string) => {
        setText(text);
        baseUrlProvider.setFilter(text);
        fetchNewCharacters(text);
    }, []);

    return (
        <View style={styles.header}>
            <SearchInput text={text} onChangeText={setNewText}/>
        </View>
    );
});