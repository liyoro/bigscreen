<template>
  <section class="app-main">
    <!-- name="fade-transform" mode="out-in" -->
    <transition>
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'app-main',
  components: {},
  computed: {
    key() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  /* 50= navbar  50  */
  min-height: calc(100vh - 54px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>

<style lang="scss" scoped></style>
