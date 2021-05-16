<template>
  <div class="text-center">
    <p class="text-sm text-gray-700">
      Showing
      {{ ' ' }}
      <span class="font-medium">{{ from }}</span>
      {{ ' ' }}
      to
      {{ ' ' }}
      <span class="font-medium">{{ to }}</span>
      {{ ' ' }}
      of
      {{ ' ' }}
      <span class="font-medium">{{ total }}</span>
      {{ ' ' }}
      results
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      from: (state) => state.products.from,
      to: (state) => state.products.to,
      total: (state) => state.products.total,
    }),
  },
};
</script>

<style></style>
