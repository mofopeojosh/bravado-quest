<template>
  <article class="profile-card">
    <div class="profile-card__image">
      <img :src="user.avatar" :alt="user.name">
    </div>
    <div class="profile-card__body">
      <div class="profile-card__content">
        <div class="profile-card__header">
          <h2 class="profile-card__name" v-highlight="searchQuery">{{user.name}}</h2>
          <span v-highlight="searchQuery">{{user.email}}</span>
        </div>
        <p class="profile-card__title" v-highlight="searchQuery">{{user.title}}</p>
        <p class="profile-card__address" v-highlight="searchQuery">{{user.address}}</p>
      </div>
      <div class="profile-card__actions">
        <a class="link">MARK AS SUITABLE</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    user: Object
  },
  computed: {
    searchQuery() {
      return this.$store.state.searchQuery;
    }
  },
  directives: {
    highlight: {
      bind(el, binding) {
        const content = el.innerHTML;
        el.innerHTML = content.replace(new RegExp(binding.value, 'gi'), (str) => {
          return `<span class="text--highlight">${str}</span>`;
        });
      },
    }
  }

};
</script>

<style lang="scss">
  .profile-card {
    display: flex;
    color: rgba(0, 0, 0, 0.5438);
    margin-top: 1.429rem;
    border-radius: 3px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.24), 0px 0px 2px 0px rgba(0, 0, 0, 0.12);

    &__image {
      width: 8.375rem;
      height: 8.5rem;
      background-color: rgba(0, 0, 0, 0.25);
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    &__body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(250, 250, 250, 1);
    }

    &__content {
      padding-left: 30px;
      padding-right: 10px;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      padding-top: 8px;
    }

    &__name {
      font-size: 1.7rem;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.87);
    }

    &__title {
      line-height: 1.25rem;
      font-weight: 700;
    }

    &__actions {
      padding: 1rem 2.5rem;
      border-top: 1px solid rgba(0, 0, 0, 0.12);

      .link {
        font-weight: 500;
        color: rgba(0, 150, 136, 1);
      }
    }
  }

  .text--highlight {
    background-color: rgba(255, 247, 59, 1);
  }
</style>
