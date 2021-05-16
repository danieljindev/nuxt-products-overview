<template>
  <div
    class="product-card"
    :style="`background-image: url('${product.image}');`"
  >
    <div class="product-card-footer">
      <div class="text-lg text-gray-50">{{ product.name }}</div>
      <p class="text-base text-gray-50">{{ product.price | formatPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    formatPrice(value) {
      return `$${value.toFixed(2)}`;
    },
  },
  props: {
    product: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="postcss">
.product-card-footer {
  @apply w-full bg-black bg-opacity-80 flex grid justify-items-center flex-col rounded rounded-t-none py-1;
}
.product-card {
  @apply rounded m-auto shadow-lg mb-10 flex items-end cursor-pointer;
}
.product-card {
  background-repeat: no-repat;
  background-size: cover;
  background-blend-mode: multiply;
  height: 300px;
  width: 300px;
}
</style>
