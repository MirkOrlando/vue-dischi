<template>
  <header class="pt-2 pb-3">
    <div class="logo">
      <img src="@/assets/img/spotify-logo.png" alt="" />
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeaderComponent",
};
</script>

<style scoped lang="scss">
header {
  background-color: $litePrimaryColor;
  .logo {
    width: 80px;
    img {
      vertical-align: unset;
    }
  }
}
</style>
