<template>
  <div id="app">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeaderComponent.vue";
import SiteMain from "./components/SiteMainComponent.vue";
import SiteFooter from "./components/SiteFooterComponent.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>
