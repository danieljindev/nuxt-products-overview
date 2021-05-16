<template>
  <div class="container mx-auto min-h-screen">
    <SearchBox />
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-10">
      <Product
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      class="sm:flex-1 sm:flex sm:items-center sm:justify-between px-20 pb-10"
    >
      <PageDetail />
      <Pagination />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      products: (state) => state.products.products,
    }),
    ...mapGetters('products', {
      filteredProducts: 'filteredProducts',
      uniqueCategories: 'uniqueCategories',
    }),
  },
  created() {
    this.$store.dispatch('products/getProducts');
  },
  methods: {
    ...mapActions('products', ['getProducts']),
  },
};
</script>

<style></style>
