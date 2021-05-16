<template>
  <div class="text-center">
    <nav
      class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <a href="javascript:;" class="rounded-l-md page-button">
        <span class="sr-only">Previous</span>
        <ChevronDoubleLeftIcon
          class="h-5 w-5"
          aria-hidden="true"
          @click="movePage(first_page_url)"
        />
      </a>
      <a href="javascript:;" aria-current="page" class="page-button">
        <ChevronLeftIcon
          class="h-5 w-5"
          aria-hidden="true"
          @click="movePage(prev_page_url)"
        />
      </a>
      <a href="javascript:;" aria-current="page" class="page-button">
        <ChevronRightIcon
          class="h-5 w-5"
          aria-hidden="true"
          @click="movePage(next_page_url)"
        />
      </a>
      <a href="javascript:;" class="rounded-r-md page-button">
        <span class="sr-only">Next</span>
        <ChevronDoubleRightIcon
          class="h-5 w-5"
          aria-hidden="true"
          @click="movePage(last_page_url)"
        />
      </a>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@vue-hero-icons/solid';

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
  },
  computed: {
    ...mapState({
      first_page_url: (state) => state.products.first_page_url,
      next_page_url: (state) => state.products.next_page_url,
      prev_page_url: (state) => state.products.prev_page_url,
      last_page_url: (state) => state.products.last_page_url,
    }),
  },
  methods: {
    movePage(fetchUrl) {
      this.$store.dispatch('products/getProducts', fetchUrl);
    },
  },
};
</script>

<style lang="postcss">
.page-button {
  @apply bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-2 py-2 border text-sm font-medium;
}
</style>
