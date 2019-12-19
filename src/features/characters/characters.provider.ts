import { httpClient } from 'services/apiClient';
import { DataProvider } from 'services/data/baseProvider';
import { charactersFetcher } from 'services/data/baseProvider';
import { BaseUrlProvider } from 'services/data/urlProvider';

export const charactersProvider = DataProvider(charactersFetcher(httpClient), new BaseUrlProvider());