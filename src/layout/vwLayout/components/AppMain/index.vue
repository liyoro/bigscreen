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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables.scss';
@import '~@/styles/scale.scss';
.app-main {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: vh($headHeight);
  bottom: 0;
  background-color: $appBg;
}
</style>
