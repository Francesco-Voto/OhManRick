
import { BaseUrlProvider, IUrlProvider, baseUrl } from '../urlProvider';
    
    describe('Given an urlProvider', () => {
      let urlProvider: IUrlProvider;

      beforeEach(() => {
        urlProvider = new BaseUrlProvider();
      });

      describe('when a new filter is provided', () => {
            it('should set a base url and filter', () => {
                urlProvider.setFilter('Rick');
                const url = urlProvider.getUrl();
                expect(url).toBe(`${baseUrl}?name=Rick`);
            });
        });
    
        describe('when a null filter', () => {
            it('should set a base url', () => {
                urlProvider.setFilter();
                const url = urlProvider.getUrl();
                expect(url).toBe(baseUrl);
            });
        });

    });
