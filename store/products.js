// initial state
const state = () => ({
  products: [],
  selectedCategory: 0,
  current_page: null,
  first_page_url: null,
  next_page_url: null,
  prev_page_url: null,
  last_page_url: null,
  from: 0,
  to: 0,
  total: 0,
  term: '',
  loading: false,
  error: null,
});

// getters
const getters = {
  filteredProducts: (state, getters, rootState) => {
    let filtered = [...state.products];

    if (state.term !== '') {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(state.term.toLowerCase())
      );
    }
    if (state.selectedCategory !== 0) {
      filtered = filtered.filter(
        (product) => product.category === state.selectedCategory
      );
    }

    return filtered;
  },
  uniqueCategories: (state, getters, rootState) => {
    const categories = [
      {
        id: 0,
        name: 'All',
        image: null,
      },
    ];

    state.products.forEach((product) => {
      if (!categories.find((category) => product.category === category.id)) {
        const category = {
          id: product.category,
          name: product.catname,
          image: product.catimage,
        };
        categories.push(category);
      }
    });
    return categories;
  },
};

// actions
const actions = {
  async getProducts({ commit }, fetchUrl) {
    commit('setLoading');
    try {
      fetchUrl = !fetchUrl
        ? 'https://trayvonnorthern.com/Edgewood-API/public/api/products'
        : fetchUrl;
      const response = await this.$axios.$get(fetchUrl);
      // Success 🎉
      commit('setProducts', response.data);
      commit('setPagination', response);
    } catch (error) {
      // Error 😨
      commit('getProductsError', 'Error while fetching products!');
      console.log(error);
    }
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.products = products;
    state.loading = false;
  },
  selectCategory(state, categoryId) {
    state.selectedCategory = categoryId;
  },
  changeSearchTerm(state, term) {
    state.term = term;
  },
  setPagination(state, payload) {
    state.current_page = payload.current_page;
    state.first_page_url = payload.first_page_url;
    state.next_page_url = payload.next_page_url;
    state.prev_page_url = payload.prev_page_url;
    state.last_page_url = payload.last_page_url;
    state.from = payload.from;
    state.to = payload.to;
    state.total = payload.total;
  },
  setLoading(state) {
    state.loading = true;
    state.error = null;
  },
  getProductsError(state, error) {
    state.error = error;
    state.loading = false;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
