<script setup lang="ts">
import { usePokemonStore } from '@/store/pokemonStore';

const pokemonStore = usePokemonStore();
const { getJapanesePokemonNames, getPokemonImagePath } = storeToRefs(pokemonStore);
</script>

<template>
  <h1>ポケモン図鑑アプリ</h1>
  <ul class="grid grid-cols-4 gap-2 p-4">
    <template v-for="(name, index) in getJapanesePokemonNames" :key="index">
      <li>
        <NuxtLink :to="`/pokemon/${index}`">
          <Card>
            <CardHeader>
              <img :src="getPokemonImagePath[index]" alt="ポケモンの画像" />
            </CardHeader>
            <CardContent>
              <CardTitle class="text-center">{{ name }}</CardTitle>
            </CardContent>
          </Card>
        </NuxtLink>
      </li>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
#pokemon-list {
  width: 1200px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.8);
}

h1 {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 40px;
  border-bottom: 3px dashed #000;
}
.pokemon-list {
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: auto;
  width: 100%;
  padding: 40px;
}

.pokemon-item {
  margin: 10px;
  padding: 10px;
  text-align: center;
  border: 2px solid #222;
  border-radius: 50%;
  background: #fff;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.1s ease-out forwards;
}

.pokemon-image {
  width: 96px;
  height: 96px;
  border-radius: 50%;
}

.pokemon-types {
  list-style: none;
  margin-top: 5px;
  padding: 0;
  display: flex;
  justify-content: center;
}

.pokemon-type {
  margin-right: 5px;
}

$types: 'bug', 'dark', 'dragon', 'electric', 'fairy', 'fighting', 'fire', 'flying', 'ghost', 'grass', 'ground', 'ice',
  'normal', 'poison', 'psychic', 'rock', 'steel', 'water';

.type-image {
  width: 24px;
  height: 24px;
  background-size: cover;
  background-repeat: no-repeat;
}

.pokemon-stats {
  list-style: none;
  padding: 0;
  margin-top: 10px;
  font-size: 14px;

  .pokemon-stat {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    .stat-name {
      width: 100px;
    }

    .stat-bar-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      margin-left: 10px;
      position: relative;

      .stat-bar {
        height: 10px;
        background-color: #ffcc00;
        border: 1px solid #000;
      }

      .stat-value {
        position: absolute;
        right: -30px;
      }
    }
  }
}

/* フェードアップアニメーションの定義 */
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ボールが割れるアニメーション */
.break-animation {
  position: absolute;
  width: 300px;
  z-index: 1000;
  pointer-events: none;

  img {
    width: 100%;
    height: auto;
  }
}
</style>
