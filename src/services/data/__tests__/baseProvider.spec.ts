import {
  Mock, IMock, Times, It,
} from 'typemoq';
import { IUrlProvider, BaseUrlProvider } from 'services/data/urlProvider';
import { Character, Data } from 'types';
import { DataProvider } from '../baseProvider';
  
  describe('Given a characters provider', () => {
    let addCharacters: IMock<(characters: Character[]) => void>;
    let setLoading: IMock<(loading: boolean) => void>;
    let setError: IMock<(error: any) => void>;
    let fetcher: IMock<(url: string) => Promise<Data>>;
    let urlProvider: IUrlProvider;
    let subject: () => Promise<void>;
  
    beforeEach(() => {
      addCharacters = Mock.ofType<(characters: Character[]) => void>();
      setLoading = Mock.ofType<(loading: boolean) => void>();
      setError = Mock.ofType<(error: any) => void>();
      fetcher = Mock.ofType<(url: string) => Promise<Data>>();
      urlProvider = new BaseUrlProvider();
      subject = DataProvider(fetcher.object, urlProvider)(addCharacters.object, setLoading.object, setError.object);
    });

    describe('when the data are retrieve', () => {
      beforeEach(() => {      
        fetcher.setup(f => f('/character')).returns(() => Promise.resolve(
          { 
            data: { 
              results: [], 
              info: { next: ''} 
            },
          }
        ));
       
      });

      it('should set a loading state', () => {
        subject();
        setLoading.verify(f => f(true), Times.once());
      });

      describe('when no error occurs', () => {
        beforeEach(async () => {
          await subject();
        });

        it('should send the data', () => {
          addCharacters.verify(f => f([]), Times.once());
        });

        it('should reset loading state', () => {
          setLoading.verify(f => f(false), Times.once());
        });
        
        it('should never set error state', () => {
          setError.verify(f => f({}), Times.never());
        });

      });

    });

    describe('when an error occurs', () => {
      const error = new Error('Error');
      beforeEach(() => {
        fetcher.setup(f => f('/character')).returns(() => Promise.reject(error));
      });

      it('should set a loading state', () => {
        subject();
        setLoading.verify(f => f(true), Times.once());
      });

      describe('when the retrieve is performed', () => {
        beforeEach(async () => {
          await subject();
        });

        it('should set error state', () => {
          setError.verify(f => f(error), Times.once());
        });
  
        it('should never send data', () => {
          addCharacters.verify(f => f([]), Times.never());
        });

        it('should reset loading state', () => {
          setLoading.verify(f => f(false), Times.once());
        });
        
      });

    });

    describe('when no url is provided', () => {
      beforeEach(() => {
        urlProvider.setUrl(null);
      });

      it('should never set a loading state', () => {
        subject();
        setLoading.verify(f => f(true), Times.never());
      });

        it('should never send data', async () => {
          await subject();
          addCharacters.verify(f => f([]), Times.never());
        });

        it('should never reset loading state', async () => {
          await subject();
          setLoading.verify(f => f(false), Times.never());
        });

        it('should never set error state', async() => {
          await subject();
          setError.verify(f => f(false), Times.never());
        });
    });

    describe('when a new url is provided back', () => {
      const newUrl = '/character?page=2';
      let mockFunction;

      beforeEach(async() => {
        mockFunction = jest.spyOn(urlProvider, 'setUrl');
        fetcher.setup(f => f('/character')).returns(() => Promise.resolve(
          { 
            data: { 
              results: [], 
              info: { next: newUrl} 
            },
          }
        ));
        await subject();
      });

      it('should save it', () => {
        expect(mockFunction).toHaveBeenCalledWith(newUrl);
      });
    });

});