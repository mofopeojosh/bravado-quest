<template>
  <section class="profile-list">
    <SearchInput :value="searchQuery" @search="handleSearch"/>
    <section v-for="(user, key) in filteredData" :key="key">
      <ProfileCard :user="user"/>
    </section>
  </section>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredData() {
      return this.users.filter(user => {
        return user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          || user.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          || user.address.toLowerCase().includes(this.searchQuery.toLowerCase())
          || user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
    searchQuery() {
      return this.$store.state.searchQuery;
    }
  },
  methods: {
    handleSearch: debounce(function (q) {
      this.$store.dispatch('updateSearchQuery', q);
    }, 250)
  }
};
</script>

<style>
  .profile-list {
    min-width: 564px;
    max-width: 768px;
    max-height: 100vh;
    overflow: scroll;
    margin: auto;
    font-size: 0.875rem;
    padding: 1.25rem 1rem 1.25rem 1rem;
    background-color: rgba(255, 255, 255, 1);
  }
  @media (min-width: 769px) {
    .profile-list{
      margin: 1.875rem auto;
    }
  }
</style>
