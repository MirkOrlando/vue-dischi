<template>
  <main>Site Main Here</main>
</template>

<script>
import axios from "axios";
export default {
  name: "SiteMainComponent",
  data() {
    return {
      link: "https://flynn.boolean.careers/exercises/api/array/music",
      records: null,
      loading: true,
      error: null,
    };
  },
  methods: {
    call_API() {
      axios
        .get(this.link)
        .then((response) => {
          //console.log(this, response);
          this.records = response.data.response;
          this.loading = !response.data.success;
        })
        .catch((error) => {
          console.log(error);
          this.error = error;
        });
    },
  },
  mounted() {
    this.call_API();
  },
};
</script>

<style scoped lang="scss">
main {
  background-color: $primaryColor;
}
</style>
