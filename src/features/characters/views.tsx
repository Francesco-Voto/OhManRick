import React, { useEffect } from 'react';
import { View } from 'react-native';
import { httpClient } from 'services/apiClient';

export const Characters = () => {
    useEffect(() =>{
        async function fetchData() {
        const characters = await httpClient.get('character');
        }
        fetchData();
      }, []);
    return (<View />);
};
