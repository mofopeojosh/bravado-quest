<template>
  <section class="profile-list">
    <SearchInput :value="searchQuery" @search="handleSearch"/>
    <section v-for="(user, key) in filteredData" :key="key">
      <ProfileCard :user="user"/>
    </section>
    <section v-if="searchQuery && !filteredData.length" class="profile-list__empty">
      <p>There are no users profiles that match '{{searchQuery}}'</p>
    </section>
  </section>
</template>

<script>
import debounce from 'lodash.debounce';

export default {
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

<style lang="scss">
  .profile-list {
    min-width: 564px;
    max-width: 768px;
    margin: auto;
    font-size: 0.875rem;
    padding: 1.25rem 1rem 1.25rem 1rem;
    background-color: rgba(255, 255, 255, 1);

    &__empty{
      padding: 1.875rem;
      margin-top: 1.429rem;
      border-radius: 3px;
      text-align: center;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);
    }
  }

  @media (min-width: 769px) {
    .profile-list{
      max-height: calc(100vh - (2* 1.875rem));
      overflow: scroll;
      margin: 1.875rem auto;
    }
  }
</style>
