import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Api from 'services/api';
import { LocationType } from 'types/LocationType';

interface IContextProps {
  locations: LocationType[];
  isLoading: boolean;
  fetchLocations: () => Promise<void>;
}

interface ILocationsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const LocationsProvider: React.FC<ILocationsProviderProps> = ({
  children,
}) => {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocations = useCallback(async () => {
    setIsLoading(true);

    try {
      const { data } = await Api.get('/location');
      setLocations(data);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          locations,
          isLoading,
          fetchLocations,
        }),
        [locations, isLoading, fetchLocations],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useLocations = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useLocations must be within MyCustomProvider');
  }

  return context;
};
