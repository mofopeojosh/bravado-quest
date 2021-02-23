export const state = () => ({
  users: [],
  searchQuery: ''
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setSearchQuery(state, searchQuery) {
    state.searchQuery = searchQuery;
  }
};

export const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('fetchUsers');
  },
  async fetchUsers({commit, state}) {
    if (!state.users.length) {
      const users = await this.$http.$get(`/users.json`);
      commit('setUsers', users);
    }
  },
  async updateSearchQuery({commit, dispatch}, searchQuery) {
    if (searchQuery) {
      this.$router.push(`/search/${searchQuery}`);
    } else {
      this.$router.push('/');
    }
    await dispatch('fetchUsers');
    commit('setSearchQuery', searchQuery || '');
  },
};
