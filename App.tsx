import React from 'react';
import { SafeAreaView } from 'react-native';

import { useCharactersContext } from 'services/reducer';
import { Characters } from 'features/characters';
import { Search } from 'features/search';

const App = () => (
    <SafeAreaView>
      <useCharactersContext.Provider>
        <Search />
        <Characters />
      </useCharactersContext.Provider>
    </SafeAreaView>
);

export default App;
