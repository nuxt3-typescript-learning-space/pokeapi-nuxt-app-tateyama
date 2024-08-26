/**
 * storeやservices配下の関数で使用するtype, interfaceを定義
 * 自作の型定義ファイルに ".d.ts" と付けない方がいい
 * https://techlab.q-co.jp/articles/41/
 * apiの返却値に揃える形でinterfaceを定義する
 */

export interface PokemonsData {
  count: number;
  next?: string; // オプショナル(任意)プロパティ
  previous?: string;
  results: PokemonBaseData[];
}

export interface PokemonBaseData {
  name: string;
  url: string;
}

export interface PokemonsDetailData {
  species: Species;
  sprites: Sprites;
}

export interface Species {
  name: string;
  url: string;
}

export interface Sprites {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

export interface PokemonsSpeciesData {
  names: NamesValue[];
  hoge: string;
  fugafuga: string;
}

export interface NamesValue {
  language: {
    name: string;
    url: string;
  };
  name: string;
}
