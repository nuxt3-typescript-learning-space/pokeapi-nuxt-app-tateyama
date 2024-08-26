import { BASE_URL } from '@/constants/pokemon';
import type { PokemonsData, PokemonsDetailData, PokemonsSpeciesData } from '@/types/pokemon';

/**
 * オブジェクトの型アサーションの留意点
 * ・アサーションで指定したプロパティ以外が存在していてもエラーにはならない
 * ・ただし、アサーションで指定したプロパティが存在しない場合はエラーになる
 */

// ポケモン一覧の情報
export const fetchPokemonsData = async (limit: number = 20) => {
  const response = await $fetch(`${BASE_URL.POKEMON}?limit=${limit}`);
  return response as Promise<PokemonsData>;
};

// ポケモンの基本情報
export const fetchPokemonsDetailData = async (url: string) => {
  const response = await $fetch(url);
  return response as Promise<PokemonsDetailData>;
};

// ポケモンの詳細情報
export const fetchPokemonsSpeciesData = async (url: string) => {
  const response = await $fetch(url);
  return response as Promise<PokemonsSpeciesData>;
};
