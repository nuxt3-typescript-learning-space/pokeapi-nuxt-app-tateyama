<script setup lang="ts">
import Index from '@/components/view/pokemon/Index.vue';
useHead({
  title: 'ポケモン一覧ページ',
});

// ページメタ情報にミドルウェアを定義
definePageMeta({ middleware: 'fetch-pokemon-list' });
</script>

<template>
  <Index />
</template>
