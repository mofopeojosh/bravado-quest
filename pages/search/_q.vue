<template>
  <ProfileList/>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('updateSearchQuery', this.$route.params.q);
  }
}
</script>

<style>

</style>
