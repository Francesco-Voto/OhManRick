export interface IUrlProvider {
    setUrl: (url: string) => void;
    getUrl: (filter?: string) => string;
}

const baseUrl = '/character';

export class BaseUrlProvider implements IUrlProvider{
    private url: string = baseUrl;
    private filter: string = null;

    setUrl = (url: string) => this.url = url;    
    
    getUrl = (filter: string = null) => {
        if(filter !== this.filter){
            this.url = baseUrl;
            if(filter){
                this.url = `${this.url}?name=${filter}`;
            }
            this.filter = filter;
        }
        return this.url;
    }

};