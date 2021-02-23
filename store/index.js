export const state = () => ({
  users: [],
  searchQuery: ''
})

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { $http }) {
    const users = await $http.$get(`/users.json`);
    commit('setUsers', users)
  },
  updateSearchQuery({ commit }, searchQuery) {
    if(searchQuery) {
      this.$router.push(`/search/${searchQuery}`);
    } else {
      this.$router.push('/');
    }
    commit('setSearchQuery', searchQuery || '')
  },
}
