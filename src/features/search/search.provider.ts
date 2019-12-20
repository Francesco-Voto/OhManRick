import { httpClient } from 'services/apiClient';
import { DataProvider } from 'services/data/baseProvider';
import { charactersFetcher } from 'services/data/baseProvider';
import { baseUrlProvider } from 'services/data/urlProvider';

export const searchProvider = DataProvider(charactersFetcher(httpClient), baseUrlProvider);