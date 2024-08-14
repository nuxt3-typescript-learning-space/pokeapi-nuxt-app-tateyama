<script setup lang="ts">
definePageMeta({
  // idが数値以外の場合は404エラーに遷移
  validate: async (route) => {
    const valid = {
      // TODO: 他のページでも流用したいためmiddlewareで管理
      isNumber: /^\d+$/,
    };

    const { params } = route;
    const paramId = params.id as string; // アサーションで string || string[] を stringにキャスト
    return valid.isNumber.test(paramId);
  },
});
</script>

<template>
  <h1>
    {{ $route.params.id }}
  </h1>
</template>

<style lang="scss" scoped></style>
