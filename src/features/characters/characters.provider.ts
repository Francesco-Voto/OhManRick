import { IHTTPClient, httpClient } from 'services/apiClient';
import { Character } from 'types';

let url = '/character';

export const DataProvider = (
    client: IHTTPClient,
) => (
    addCharacters: (characters: Character[]) => void,
    setLoading: (loading: boolean) => void,
    setError: (error: any) => void,
) => async () => {
    if(url){
        try{
            setLoading(true);
            const data = await client.get(url);
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


export const charactersProvider = DataProvider(httpClient);