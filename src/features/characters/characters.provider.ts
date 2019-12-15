import { IHTTPClient, httpClient } from 'services/apiClient';
import { Character, Data } from 'types';

let url = '/character';

export const charactersFetcher = (client: IHTTPClient) => async (url: string): Promise<Data> => await client.get(url);

export const DataProvider = (
    client: (url: string) => Promise<Data>,
) => (
    addCharacters: (characters: Character[]) => void,
    setLoading: (loading: boolean) => void,
    setError: (error: any) => void,
) => async () => {
    if(url){
        try{
            setLoading(true);
            const data = await client(url);
            addCharacters(data.data.results);
            url = data.data.info.next;
        }catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }
};


export const charactersProvider = DataProvider(charactersFetcher(httpClient));