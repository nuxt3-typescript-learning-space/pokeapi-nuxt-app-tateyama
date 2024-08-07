import { usePokemonStore } from '@/store/pokemonList';

/**
 * ページナビゲーション時にポケモンデータを取得するミドルウェア
 */
export default defineNuxtRouteMiddleware(async () => {
  const pokemonStore = usePokemonStore();
  await pokemonStore.fetchPokemonList();
});
