/**
 * stateはrefを使用して定義
 * gettersはcomputedを使用して定義
 * actionsは関数を利用して定義
 * 定義したstate,getters,actionsの内容を最後にreturnで返却する
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';

/* ------------------- type,interface ---------------------- */
/**
 * ポケモンのデータの型定義
 * interface：objectの型定義を変数化したもの
 */
export interface PokemonDetail {
  name: string;
  url: string;
  imageUrl?: string; // 画像URL。オプショナルチェイニングでnullまたはundefinedの際にエラーを回避
  japaneseName?: string; // 日本語名
  types?: string[]; // タイプ情報
  stats?: Stat[]; // 種族値
}
/**
 * 種族値のデータの型定義
 */
interface Stat {
  name: string;
  base_stat: number;
}
/**
 * PokeAPIから取得する種族値の型定義
 */
interface ApiStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

/* ------------------- store ---------------------- */
/**
 * ポケモンのデータを管理するストア
 */
export const usePokemonStore = defineStore('pokemonList', () => {
  const pokemons = ref<PokemonDetail[]>([]); //
  const error = ref<Error | null>(null); // エラー情報を保持するリアクティブ変数

  /**
   * ポケモンのデータをAPIから取得
   */
  const fetchPokemonList = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const data = await response.json();
      const results = data.results;

      // 対象ポケモンの詳細情報を取得し、リアクティブ変数に代入
      pokemons.value = await Promise.all(
        results.map((pokemon: PokemonDetail) => fetchPokemonDetails(pokemon.url, pokemon.name)),
      );
    } catch (err) {
      error.value = err instanceof Error ? err : new Error(String(err));
    }
  };

  /**
   * 選択された種族値の昇順/降順にリストを並び替える
   */
  const sortByStats = () => {};

  return { pokemons, error, fetchPokemonList, sortByStats }; // ストアの状態とメソッドを返す
});

/* ------------------- helper ---------------------- */
/**
 * PokeAPIからポケモンの詳細データを取得するヘルパー関数
 * @param url - ポケモンの詳細データURL
 * @param name - ポケモンの英語名
 * @returns ポケモンの詳細データ
 * Promise<T>：ジェネリクス。ジェネリクスとは、関数において型も引数として受け取ることができる記法。
 * 「Promiseインスタンスを返す関数」におけるT(Type)は、Promiseが履行された時に返す値の型が指定されている
 * 前提として、async functionの中でreturnをしている場合、あくまで返却されるのはPromiseインスタンスであり、その中に返却値が格納されている。
 * 従って戻り値の型注釈が「Promise<T>」となっている
 */
const fetchPokemonDetails = async (url: string, name: string): Promise<PokemonDetail> => {
  const res = await fetch(url);
  const details = await res.json();
  const japaneseName = await fetchJapaneseName(name);
  const stats = fetchStats(details.stats);
  const types = details.types.map((typeInfo: { type: { name: string } }) => typeInfo.type.name);
  return {
    name,
    url,
    imageUrl: details.sprites.front_default,
    japaneseName,
    types,
    stats,
  };
};

/**
 * ポケモンの和名をAPIから取得
 * @param englishName - 英名
 * @returns 和名
 */
const fetchJapaneseName = async (englishName: string): Promise<string> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${englishName}`);
  const data = await response.json();
  const japaneseEntry = data.names.find((name: { language: { name: string } }) => name.language.name === 'ja');
  return japaneseEntry ? japaneseEntry.name : englishName; // 日本語名が見つからない場合は英語名を返す
};

/**
 * ポケモンの種族値をAPIから取得
 * @param stats - 種族値の配列
 * @returns 種族値のデータ
 */
const fetchStats = (stats: ApiStat[]): Stat[] => {
  const statNames: { [key: string]: string } = {
    hp: 'HP',
    attack: 'こうげき',
    defense: 'ぼうぎょ',
    'special-attack': 'とくこう',
    'special-defense': 'とくぼう',
    speed: 'すばやさ',
  };

  return stats.map((stat) => ({
    name: statNames[stat.stat.name],
    base_stat: stat.base_stat,
  }));
};
