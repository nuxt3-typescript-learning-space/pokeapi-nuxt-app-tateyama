<script setup lang="ts">
// import { ref } from 'vue';
// import { usePokemonStore } from '@/store/pokemonList';
// import type { PokemonDetail } from '@/store/pokemonList'; // 型情報をimport

// // ポケモンストアを使用する
// const pokemonStore = usePokemonStore();
// const {
//   pokemons: pokemonList,
// } = pokemonStore as { pokemons: PokemonDetail[] };

// const route = useRoute();
// const { index } = route.params;
// const pokemon = ref(pokemonList[index]);
</script>

<template>
  <h1>
    {{ $route.params.index }}
  </h1>
  <!-- <div class="detail-content">
    <p class="detail-pokemon-name">{{ pokemon?.japaneseName }}</p>
    <div class="detail-pokemon-image">
      <img class="detail-pokemon-image__item" :src="pokemon?.imageUrl" :alt="pokemon?.japaneseName" >
    </div>
    <ul class="pokemon-stats">
      <li v-for="stat in pokemon?.stats" :key="stat.name" class="pokemon-stat">
        <span class="stat-name">{{ stat.name }}</span>
        <div class="stat-bar-container">
          <div class="stat-bar" :style="{ width: `${(stat.base_stat / 255) * 100}%` }">
            <span class="stat-value">{{ stat.base_stat }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<style lang="scss" scoped>
.detail-content {
  background: white;
  border-radius: 5px;
  position: relative;
  width: 500px;
  height: 600px;
}

.detail-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: rotate(45deg);
  border: 1px solid #000;
  border-radius: 50%;
  transition: transform 0.2s ease-out;

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background: #000;
  }

  &::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover {
    transform: rotate(45deg) scale(1.1);
  }
  .detail-content {
    background-color: #f5f5dc; /* ベージュ背景 */
    padding: 40px;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: left;
  }
  .detail-pokemon-name {
    font-size: 18px;
    font-weight: bold;
  }
  .detail-pokemon-image {
    text-align: center;
    margin-top: 10px;
    background: #fff;
    padding: 20px;
    border: 2px dotted #000;

    &__item {
      width: 200px;
      height: 200px;
      margin: auto;
    }
  }

  .detail-pokemon-description {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
