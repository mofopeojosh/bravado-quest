<template>
  <div class="search-input">
    <img src="~assets/images/search-icon.svg"/>
    <input type="text"
           name="search"
           id="search"
           ref="search"
           :value="value"
           autofocus
           @input="(event) => $emit('search', event.target.value)"/>
  </div>
</template>

<script>
export default {
  props: {
    value: String
  },
  mounted() {
    this.$nextTick(() => this.$refs.search.focus());
  }
};
</script>

<style lang="scss">
  .search-input {
    display: flex;
    border-radius: 2px;
    background-color: rgba(250, 250, 250, 1);
    border: 1px solid transparent;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);

    img {
      display: inline;
      margin: 16px 20px;
    }

    input {
      flex-grow: 1;
      outline: none;
      border: none;
      font-size: 1.429rem;
      background-color: inherit;
    }
  }

</style>
