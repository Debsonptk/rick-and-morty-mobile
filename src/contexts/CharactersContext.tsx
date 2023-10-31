import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Api from 'services/api';
import { CharacterType } from 'types/CharacterType';

interface IContextProps {
  characters: CharacterType[];
  character: CharacterType | null;
  isLoading: boolean;
  fetchCharacters: () => Promise<void>;
  fetchCharacter: (id: number | string) => Promise<void>;
}

interface ICharactersProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data: response } = await Api.get('/character');
      setCharacters(response);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const fetchCharacter = useCallback(async (id: number | string) => {
    setIsLoading(true);

    try {
      const { data: response } = await Api.get(`/character/${id}`);
      setCharacter(response);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          character,
          characters,
          isLoading,
          fetchCharacter,
          fetchCharacters,
        }),
        [character, characters, isLoading, fetchCharacter, fetchCharacters],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacters must be within MyCustomProvider');
  }

  return context;
};
