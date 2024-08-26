import { usePokemonStore } from '@/store/pokemonStore.js';

/**
 * ページナビゲーション時にポケモンデータを取得するミドルウェア
 */
export default defineNuxtRouteMiddleware(async () => {
  const pokemonStore = usePokemonStore();
  await pokemonStore.initFetchPokemonsData();
});
