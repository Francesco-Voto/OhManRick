export interface IUrlProvider {
    setUrl: (url: string) => void;
    getUrl: () => string;
    setFilter: (filter?: string) => void;
}

export const baseUrl = '/character';

export class BaseUrlProvider implements IUrlProvider{
    private url: string = baseUrl;
    private filter: string = null;

    setFilter = (filter: string = null) => {
        if(!filter) this.url = baseUrl;
        else this.url = `${baseUrl}?name=${filter}`;
        this.filter = filter;
    };

    setUrl = (url: string) => this.url = url;    
    
    getUrl = () => this.url;

};

export const baseUrlProvider = new BaseUrlProvider();