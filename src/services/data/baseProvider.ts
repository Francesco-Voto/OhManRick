import { IHTTPClient, httpClient } from 'services/apiClient';
import { Character, Data } from 'types';
import { IUrlProvider } from './urlProvider';

export const charactersFetcher = (client: IHTTPClient) => async (url: string): Promise<Data> => await client.get(url);

export const DataProvider = (
    client: (url: string) => Promise<Data>,
    urlProvider: IUrlProvider,
) => (
    saveCharacters: (characters: Character[]) => void,
    setLoading: (loading: boolean) => void,
    setError: (error: any) => void
) => async () => {
    const url = urlProvider.getUrl();
    if(url){
        try{
            setLoading(true);
            const data = await client(url);
            saveCharacters(data.data.results);
            urlProvider.setUrl(data.data.info.next);
        }catch(error){
            setError(error);
        }
        finally{
            setLoading(false);
        }
    }
};