<template>
  <main>
    <RecordsList />
  </main>
</template>

<script>
import RecordsList from "@/components/RecordsListComponent.vue";
export default {
  name: "SiteMainComponent",
  components: {
    RecordsList,
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: $primaryColor;
}
</style>
