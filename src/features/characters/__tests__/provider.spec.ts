import {
  Mock, IMock, Times, It,
} from 'typemoq';
import { Character, Data } from 'types';
import { DataProvider, charactersFetcher } from '../characters.provider';
  
  describe('Given a characters provider', () => {
    let addCharacters: IMock<(characters: Character[]) => void>;
    let setLoading: IMock<(loading: boolean) => void>;
    let setError: IMock<(error: any) => void>;
    let fetcher: IMock<(url: string) => Promise<Data>>;
    let subject: () => Promise<void>;
  
    beforeEach(() => {
      addCharacters = Mock.ofType<(characters: Character[]) => void>();
      setLoading = Mock.ofType<(loading: boolean) => void>();
      setError = Mock.ofType<(error: any) => void>();
      fetcher = Mock.ofType<(url: string) => Promise<Data>>();
      subject = DataProvider(fetcher.object)(addCharacters.object, setLoading.object, setError.object);
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

      it('should send it and reset loading state', async () => {
        await subject();
        addCharacters.verify(f => f([]), Times.once());
        setLoading.verify(f => f(false), Times.once());
      });

      it('should never call error state', async () => {
        await subject();
        setError.verify(f => f({}), Times.never());
      });
    });

    describe('when an error occur', () => {
      const error = new Error('Error');
      beforeEach(() => {
        fetcher.setup(f => f('/character')).returns(() => Promise.reject(error));
      });

      it('should set a loading state', () => {
        subject();
        setLoading.verify(f => f(true), Times.once());
      });

      it('should send it and reset loading state', async () => {
        await subject();
        setError.verify(f => f(error), Times.once());
        setLoading.verify(f => f(false), Times.once());
      });

      it('should never send data', async () => {
        await subject();
        addCharacters.verify(f => f([]), Times.never());
      });
    });


});