import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Api from 'services/api';
import { EpisodeType } from 'types/EpisodeType';

interface IContextProps {
  episodes: EpisodeType[];
  isLoading: boolean;
  fetchEpisodes: () => Promise<void>;
}

interface IEpisodesProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const EpisodesProvider: React.FC<IEpisodesProviderProps> = ({
  children,
}) => {
  const [episodes, setEpisodes] = useState<EpisodeType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchEpisodes = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await Api.get('/episode');
      setEpisodes(data.results);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          episodes,
          isLoading,
          fetchEpisodes,
        }),
        [episodes, isLoading, fetchEpisodes],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useEpisodes = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useEpisodes must be within MyCustomProvider');
  }

  return context;
};
