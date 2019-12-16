import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { Characters } from 'features/characters';
import { Search } from 'features/search';
import { useCharactersContext } from './src/features/characters/characters.reducer';

const App = () => (
    <SafeAreaView>
      <useCharactersContext.Provider>
        <Search />
        <Characters />
      </useCharactersContext.Provider>
    </SafeAreaView>
);

export default App;
