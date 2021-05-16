<template>
  <div class="float-right">
    <div class="dropdown inline-block relative">
      <button class="category-button">
        <span class="mr-1">Categories</span>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
        <li
          v-for="(category, index) in uniqueCategories"
          :key="category.id"
          @click="selectCategory(category.id)"
        >
          <a
            class="category-title"
            :class="{
              'rounded-t': index === 0,
              'rounded-b': index === uniqueCategories.length - 1,
            }"
            href="javascript:;"
            >{{ category.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('products', {
      uniqueCategories: 'uniqueCategories',
    }),
  },
  methods: {
    selectCategory(categoryId) {
      this.$store.commit('products/selectCategory', categoryId);
    },
  },
};
</script>
<style lang="postcss">
.category-button {
  @apply bg-white text-gray-700 font-semibold py-1 pr-2 pl-3 rounded inline-flex items-center;
}
.category-title {
  @apply bg-white hover:bg-gray-400 py-2 px-5 block;
}
.dropdown:hover .dropdown-menu {
  display: block;
  z-index: 1000;
}
</style>
