import { type _GettersTree } from 'pinia';
import type { PokemonBaseData, PokemonsDetailData, PokemonsSpeciesData } from '@/types/pokemon';

export interface pokemonState {
  pokemonsData: PokemonBaseData[];
  detailedPokemonsData: PokemonsDetailData[];
  speciesPokemonsData: PokemonsSpeciesData[];
  loading: boolean;
  errorMessage: string;
}

/**
 * 上で定義したstateの型を_GettersTreeで継承する必要があり
 */
export interface pokemonGetters extends _GettersTree<pokemonState> {
  getJapanesePokemonNames: (state: pokemonState) => string[];
  getPokemonImagePath: (state: pokemonState) => string[];
}

export interface pokemonActions {
  setLoading: (loading: boolean) => void;
  setErrorMessage: (errorMessage: string) => void;
  initFetchPokemonsData: () => void;
  fetchPokemonsNecessaryData: () => void;
  fetchPokemonsDetail: () => Promise<PokemonsDetailData[]>;
  fetchPokemonsSpecies: (pokemonsDetailData: PokemonsDetailData[]) => Promise<PokemonsSpeciesData[]>;
  handleError: (error: unknown) => void;
}
