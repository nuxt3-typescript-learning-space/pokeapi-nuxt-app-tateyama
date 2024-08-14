<script setup lang="ts"></script>

<template>
  <div>
    <NuxtLink to="/pokemon">
      <h1>Get Started</h1>
    </NuxtLink>
    <NuxtLink to="https://pokeapi.co/docs/v2" target="_blank"> API Docs </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  width: 100%;
  padding: 40px;
  border-bottom: 3px dashed #000;
}
</style>
